import { DefineOptionModel } from "../models/define-option.model";
import { DEFINE_OPTION_DEFAULTS } from "../configs/defineOption.defaults";
import { parseEnvValue } from "./envOption";

export async function initDefineOptions() {
  for (const opt of DEFINE_OPTION_DEFAULTS) {
    const existed = await DefineOptionModel.findOne({
      op_id: opt.op_id,
    });

    if (!existed) {
      await DefineOptionModel.create({
        op_id: opt.op_id,
        op_name: opt.op_name,
        op_description: opt.op_desc,
        op_value: parseEnvValue(opt.op_value),
        op_is_active: true,
      });
    }
  }
}
