import { Schema, model, Types } from "mongoose";

export interface IRefreshToken {
  _id: Types.ObjectId;
  us_id: Types.ObjectId;
  rt_refresh_tk: string;
  rt_exp: number;
  rt_used: boolean;
}

const refreshTokenSchema = new Schema<IRefreshToken>(
  {
    us_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rt_refresh_tk: { type: String, required: true },
    rt_exp: { type: Number, required: true },
    rt_used: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const RefreshTokenModel = model<IRefreshToken>(
  "RefreshToken",
  refreshTokenSchema
);
