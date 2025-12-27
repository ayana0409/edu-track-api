import { Schema, model, Types } from "mongoose";

export interface IUserRole {
  _id: Types.ObjectId;
  rl_name: string;
}

const userRoleSchema = new Schema<IUserRole>(
  {
    rl_name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const UserRoleModel = model<IUserRole>("UserRole", userRoleSchema);
