import { Schema, model, Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  rl_id: Types.ObjectId;
  usr_username: string;
  usr_password: string;
  usr_fullname: string;
  usr_DOB?: Date;
  usr_email?: string;
  usr_phone?: string;
  usr_school_name?: string;
  usr_major?: string;
  usr_stu_code?: string;
  usr_avatar: string;
  usr_provider: "local" | "google";
  usr_googleId?: string;
  usr_is_active: boolean;
}

const userSchema = new Schema<IUser>(
  {
    rl_id: { type: Schema.Types.ObjectId, ref: "UserRole", required: true },
    usr_username: { type: String, required: true, unique: true },
    usr_password: { type: String, required: true },
    usr_fullname: { type: String, required: true },
    usr_DOB: Date,
    usr_email: String,
    usr_phone: String,
    usr_school_name: String,
    usr_major: String,
    usr_stu_code: String,
    usr_avatar: String,
    usr_provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    usr_googleId: String,
    usr_is_active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const UserModel = model<IUser>("User", userSchema);
