import { UserRoleModel } from "../models/userRole.model";

class RoleCacheService {
  private static instance: RoleCacheService;

  private roleMap: Map<string, any> = new Map();
  private loaded = false;

  private constructor() {}

  public static getInstance(): RoleCacheService {
    if (!RoleCacheService.instance) {
      RoleCacheService.instance = new RoleCacheService();
    }
    return RoleCacheService.instance;
  }

  public async load(): Promise<void> {
    if (this.loaded) return;

    const roles = await UserRoleModel.find().lean();

    for (const role of roles) {
      this.roleMap.set(role.rl_name, role);
    }

    this.loaded = true;
    console.log(`Load role cache completed`);
  }

  public async getRoleByName(name: string) {
    if (!this.loaded) {
      await this.load();
    }

    return this.roleMap.get(name);
  }

  public async reload() {
    this.loaded = false;
    this.roleMap.clear();
    await this.load();
  }
}

export const roleCacheService = RoleCacheService.getInstance();
