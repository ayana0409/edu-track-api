import jwt, { SignOptions } from "jsonwebtoken";
import { Types } from "mongoose";
import { env } from "../configs/env";

const accessTokenOptions: SignOptions = {
  expiresIn: env.JWT_ACCESS_EXPIRES,
};

const refreshTokenOptions: SignOptions = {
  expiresIn: env.JWT_REFRESH_EXPIRES,
};

export const signAccessToken = (
  userId: Types.ObjectId,
  role: string
): string => {
  return jwt.sign(
    { userId: userId.toString(), role },
    process.env.JWT_ACCESS_SECRET as string,
    accessTokenOptions
  );
};

export const signRefreshToken = (userId: Types.ObjectId): string => {
  return jwt.sign(
    { userId: userId.toString() },
    process.env.JWT_REFRESH_SECRET as string,
    refreshTokenOptions
  );
};
