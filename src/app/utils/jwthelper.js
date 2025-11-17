/* eslint-disable no-unused-vars */

import jwt from "jsonwebtoken";
import AppError from "../errors/appErr.js";


export const createToken = (user, secret, expiresIn = "1h") => {
  const { _id, name, email, role, status } = user;
  const jwtPayload = { _id, name, email, role, status };

  return jwt.sign(jwtPayload, secret, { expiresIn });
};


export const verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    throw new AppError(401, "You are not authorized!");
  }
};
