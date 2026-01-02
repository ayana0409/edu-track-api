import bcrypt from "bcrypt";
import { UserModel } from "../models/user.model";
import { UserRoleModel } from "../models/userRole.model";
import { RefreshTokenModel } from "../models/refreshToken.model";
import { signAccessToken, signRefreshToken } from "../utils/jwt";
import { LoginRequestBody, RegisterRequestBody } from "../dtos/auth.dto";
import { successResponse } from "../utils/response";
import {
  Body,
  Controller,
  Post,
  Route,
  Security,
  SuccessResponse,
  Tags,
  Request,
} from "tsoa";
import { ApiError } from "../utils/api-error";
import { env } from "../configs/env";
import { verifyRefreshToken } from "../utils/jwt";
import { Types } from "mongoose";
import { verifyGoogleToken } from "../services/googleAuth.service";
import { roleCacheService } from "../services/roleCache.service";
import { Role } from "../types/role.enum";
import { LoginProvider } from "../types/loginProvider.enum";
import { defineOptionCacheService } from "../services/defineOptionCache.service";
import { DefineOptionKey } from "../types/defineOption.enum";

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
      rt_exp: Date.now() + env.JWT_REFRESH_EXPIRES,
    });

    return successResponse({
      accessToken,
      refreshToken,
    });
  }

  @Post("refresh-token")
  public async refreshToken(@Body() body: { refreshToken: string }) {
    const { refreshToken } = body;

    const stored = await RefreshTokenModel.findOne({
      rt_refresh_tk: refreshToken,
    });

    if (!stored) throw new ApiError(401, "Invalid refresh token");
    if (stored.rt_used) throw new ApiError(401, "Token already used");
    if (stored.rt_exp < Date.now()) throw new ApiError(401, "Token expired");

    let payload: any;
    payload = verifyRefreshToken(refreshToken);

    stored.rt_used = true;
    await stored.save();

    const user = await UserModel.findById(payload.userId).populate("rl_id");
    if (!user) throw new ApiError(404, "User not found");

    const newAccessToken = signAccessToken(
      user._id,
      (user.rl_id as any).rl_name
    );
    const newRefreshToken = signRefreshToken(user._id);

    await RefreshTokenModel.create({
      us_id: user._id,
      rt_refresh_tk: newRefreshToken,
      rt_exp: Date.now() + env.JWT_REFRESH_EXPIRES,
    });

    return successResponse({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  }

  @Post("change-password")
  @Security("jwt")
  public async changePassword(
    @Request() req: any,
    @Body()
    body: {
      oldPassword: string;
      newPassword: string;
    }
  ) {
    const dbUser = await UserModel.findById(new Types.ObjectId(req.user.id));
    if (!dbUser) throw new ApiError(404, "User not found");

    const match = await bcrypt.compare(body.oldPassword, dbUser.usr_password);
    if (!match) throw new ApiError(400, "Old password incorrect");

    dbUser.usr_password = await bcrypt.hash(body.newPassword, 10);
    await dbUser.save();

    return successResponse({ message: "Password changed successfully" });
  }

  @Post("reset-password")
  @Security("jwt", ["admin"])
  public async resetPassword(
    @Body()
    body: {
      userId: string;
    }
  ) {
    if (!Types.ObjectId.isValid(body.userId)) {
      throw new ApiError(400, "Invalid user ID");
    }

    const user = await UserModel.findById(new Types.ObjectId(body.userId));
    if (!user) throw new ApiError(404, "User not found");

    var defaultPassword =
      (await defineOptionCacheService.getValue(
        DefineOptionKey.DEFAULT_PASSWORD
      )) ?? env.DEFAULT_PASSWORD;

    user.usr_password = await bcrypt.hash(defaultPassword, 10);
    await user.save();

    return successResponse({ message: "Password reset successfully" });
  }

  @Post("google")
  public async loginWithGoogle(@Body() body: { idToken: string }) {
    const googleUser = await verifyGoogleToken(body.idToken);

    let user = await UserModel.findOne({ email: googleUser.email }).populate(
      "rl_id"
    );

    const role = await roleCacheService.getRoleByName(Role.USER);

    if (!user) {
      user = await UserModel.create({
        usr_email: googleUser.email,
        usr_fullname: googleUser.name,
        usr_provider: LoginProvider.GOOGLE,
        rl_id: role?._id,
      });
    }

    const accessToken = signAccessToken(user._id, (user.rl_id as any).rl_name);

    const refreshToken = signRefreshToken(user._id);

    await RefreshTokenModel.create({
      us_id: user._id,
      rt_refresh_tk: refreshToken,
      rt_exp: Date.now() + env.JWT_REFRESH_EXPIRES,
    });

    return successResponse({
      accessToken,
      refreshToken,
    });
  }
}
