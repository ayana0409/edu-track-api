import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { Types } from "mongoose";
import { env } from "../configs/env";
import { ApiError } from "./api-error";

const accessTokenOptions: SignOptions = {
  expiresIn: env.JWT_ACCESS_EXPIRES,
};

const refreshTokenOptions: SignOptions = {
  expiresIn: env.JWT_REFRESH_EXPIRES,
};

export interface AccessTokenPayload extends JwtPayload {
  userId: string;
  role: string;
}

export interface RefreshTokenPayload extends JwtPayload {
  userId: string;
}

export const signAccessToken = (
  userId: Types.ObjectId,
  role: string
): string => {
  return jwt.sign(
    { userId: userId.toString(), role },
    env.JWT_ACCESS_SECRET,
    accessTokenOptions
  );
};

export const signRefreshToken = (userId: Types.ObjectId): string => {
  return jwt.sign(
    { userId: userId.toString() },
    env.JWT_REFRESH_SECRET,
    refreshTokenOptions
  );
};

export const verifyAccessToken = (token: string): AccessTokenPayload => {
  try {
    return jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload;
  } catch {
    throw new ApiError(401, "Invalid or expired access token");
  }
};

/**
 * Verify refresh token
 */
export const verifyRefreshToken = (token: string): RefreshTokenPayload => {
  try {
    return jwt.verify(token, env.JWT_REFRESH_SECRET) as RefreshTokenPayload;
  } catch {
    throw new ApiError(401, "Invalid or expired refresh token");
  }
};
