import { Schema, model, Document } from "mongoose";

export interface IDefineModel extends Document {
  ml_id: string;
  ml_name?: string;
  ml_api_key: string;
  ml_api_url: string;
  ml_max_token?: number;
  ml_temperature?: number;
  ml_sys_prompt?: string;
  ml_is_active: boolean;
}

const DefineModelSchema = new Schema<IDefineModel>(
  {
    ml_id: { type: String, required: true, unique: true },
    ml_name: { type: String },
    ml_api_key: { type: String, required: true },
    ml_api_url: {
      type: String,
      default: "https://api.openai.com/v1/chat/completions",
    },
    ml_max_token: { type: Number, default: 4096 },
    ml_temperature: { type: Number, default: 0 },
    ml_sys_prompt: { type: String },
    ml_is_active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export const DefineModelModel = model<IDefineModel>(
  "DefineModel",
  DefineModelSchema
);
