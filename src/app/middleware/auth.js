import { httpStatus } from 'http-status';
import AppError from '../errors/appErr';
import User from '../modules/user/user.model';
import { verifyToken } from '../utils/jwthelper';
import config from "./app/config/index.js";

export const auth = (...requiredRoles) => {
    return async (req, res, next) => {
        try {
            const token = req.cookies?.accessToken;
            if (!token) throw new AppError(httpStatus.UNAUTHORIZED, 'Token missing!');
            let decoded;
            try {
                decoded = verifyToken(token, config.jwt_access_secret);
            } catch (err) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid or expired token!');
            }

            const { _id, role, email } = decoded;

            const user = await User.findById(_id);
            if (!user) throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
            if (user.status === 'BLOCKED')
                throw new AppError(httpStatus.FORBIDDEN, 'User is blocked!');
            if (requiredRoles.length && !requiredRoles.includes(role)) {
                throw new AppError(httpStatus.FORBIDDEN, 'You do not have permission!');
            }

            req.user = { id: _id, role, email };

            next();
        } catch (err) {
            next(err);
        }
    };
};

