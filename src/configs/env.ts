import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,

  JWT_ACCESS_EXPIRES: Number(process.env.JWT_ACCESS_EXPIRES),
  JWT_REFRESH_EXPIRES: Number(process.env.JWT_REFRESH_EXPIRES),

  DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD || "p@ssw0rd123",
};
