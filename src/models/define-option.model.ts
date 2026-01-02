import { Schema, model, Document } from "mongoose";

export interface IDefineOption extends Document {
  op_id: string;
  op_name: string;
  op_value: Record<string, any>;
  op_description?: string;
  op_is_active: boolean;
}

const DefineOptionSchema = new Schema<IDefineOption>(
  {
    op_id: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    op_name: {
      type: String,
      required: true,
      trim: true,
    },
    op_value: {
      type: Schema.Types.Mixed,
      required: true,
    },
    op_description: {
      type: String,
      default: null,
    },
    op_is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    collection: "define_option",
  }
);

export const DefineOptionModel = model<IDefineOption>(
  "DefineOption",
  DefineOptionSchema
);
