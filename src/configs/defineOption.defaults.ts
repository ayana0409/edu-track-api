import { DefineOptionKey } from "../types/defineOption.enum";
import { parseEnvValue } from "../utils/envOption";

export const DEFINE_OPTION_DEFAULTS = [
  {
    op_id: DefineOptionKey.DEFAULT_PASSWORD,
    op_name: "Default password",
    op_desc:
      "The default password assigned to users when their password is reset.",
    envKey: "DEFAULT_PASSWORD",
  },
  {
    op_id: DefineOptionKey.USR_SUGGESTION_PER_DAY,
    op_name: "User suggestion per day",
    op_desc: "The number of suggestions a user can make per day.",
    envKey: "USR_SUGGESTION_PER_DAY",
  },
  {
    op_id: DefineOptionKey.SUGGESTION_GEN_RETRY_COUNT,
    op_name: "Suggestion generation retry count",
    op_desc: "The number of times to retry suggestion generation on failure.",
    envKey: "SUGGESTION_GEN_RETRY_COUNT",
  },
  {
    op_id: DefineOptionKey.SUGGESTION_GEN_RETRY_DELAY,
    op_name: "Suggestion generation retry delay",
    op_desc:
      "The delay (in milliseconds) between suggestion generation retries.",
    envKey: "SUGGESTION_GEN_RETRY_DELAY",
  },
].map((opt) => ({
  ...opt,
  op_value: parseEnvValue(process.env[opt.envKey]),
}));
