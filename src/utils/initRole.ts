import { UserRoleModel } from "../models/userRole.model";

export const initRoles = async () => {
  const roles = ["admin", "user"];

  for (const role of roles) {
    const exists = await UserRoleModel.findOne({ rl_name: role });
    if (!exists) {
      await UserRoleModel.create({ rl_name: role });
      console.log(`Created role: ${role}`);
    }
  }
};
