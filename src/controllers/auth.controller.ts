import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { UserRoleModel } from "../models/userRole.model";
import { RefreshTokenModel } from "../models/refreshToken.model";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import {
  LoginRequestBody,
  LoginResponse,
  RegisterRequestBody,
  RegisterResponse,
} from "../dtos/auth.dto";
import { successResponse } from "../utils/response";
import { ApiResponse } from "../types/api-response";
import {
  Body,
  Controller,
  Post,
  Res,
  Route,
  SuccessResponse,
  Tags,
  TsoaResponse,
} from "tsoa";
import { ApiError } from "../utils/api-error";

@Route("auth")
@Tags("Auth")
export class AuthController extends Controller {
  @Post("register")
  @SuccessResponse(201, "Created")
  public async register(@Body() body: RegisterRequestBody): Promise<any> {
    const { username, password, fullname } = body;

    const role = await UserRoleModel.findOne({ rl_name: "user" });
    if (!role) throw new ApiError(500, "Role user not found");

    const hash = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      rl_id: role._id,
      usr_username: username,
      usr_password: hash,
      usr_fullname: fullname,
    });

    return successResponse({
      id: user._id,
      username: user.usr_username,
      fullname: user.usr_fullname,
    });
  }

  @Post("login")
  @SuccessResponse(200, "Ok")
  public async login(@Body() body: LoginRequestBody): Promise<any> {
    const { username, password } = body;

    const user = await UserModel.findOne({ usr_username: username }).populate<{
      rl_id: { rl_name: string };
    }>("rl_id");

    if (!user) throw new ApiError(401, "Invalid credentials");

    const match = await bcrypt.compare(password, user.usr_password);
    if (!match) throw new ApiError(401, "Invalid credentials");

    const accessToken = signAccessToken(user._id, user.rl_id.rl_name);
    const refreshToken = signRefreshToken(user._id);

    await RefreshTokenModel.create({
      us_id: user._id,
      rt_refresh_tk: refreshToken,
      rt_exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    return successResponse({
      accessToken,
      refreshToken,
    });
  }
}
