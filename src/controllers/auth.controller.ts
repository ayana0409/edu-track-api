import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { UserModel } from "../models/user.model";
import { UserRoleModel } from "../models/userRole.model";
import { RefreshTokenModel } from "../models/refreshToken.model";
import { signAccessToken, signRefreshToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
  const { username, password, fullname } = req.body;

  const role = await UserRoleModel.findOne({ rl_name: "user" });

  const hash = await bcrypt.hash(password, 10);

  if (!role) {
    return res.status(500).json({ message: "Role user not found" });
  }

  const user = await UserModel.create({
    rl_id: role?._id,
    usr_username: username,
    usr_password: hash,
    usr_fullname: fullname,
  });

  res.status(201).json(user);
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ usr_username: username }).populate(
    "rl_id"
  );
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const match = await bcrypt.compare(password, user.usr_password);
  if (!match) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = signAccessToken(user._id, (user.rl_id as any).rl_name);
  const refreshToken = signRefreshToken(user._id);

  await RefreshTokenModel.create({
    us_id: user._id,
    rt_refresh_tk: refreshToken,
    rt_exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
  });

  res.json({ accessToken, refreshToken });
};
