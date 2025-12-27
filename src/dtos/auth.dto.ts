import { Types } from "mongoose";

export interface RegisterRequestBody {
  username: string;
  password: string;
  fullname: string;
}

export interface LoginRequestBody {
  username: string;
  password: string;
}

export interface RegisterResponse {
  id: Types.ObjectId;
  username: string;
  fullname: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
