const httpStatus = require('http-status');
const config = require('../config');
const AppError = require('../errors/appError');

const { User } = require('../modules/user/user.model');
const { verifyToken } = require('../utils/jwthelper');


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

