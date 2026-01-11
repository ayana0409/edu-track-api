import { DefineOptionModel } from "../models/define-option.model";

class DefineOptionCacheService {
  private static instance: DefineOptionCacheService;

  private optionMap: Map<string, any> = new Map();
  private loaded = false;

  private constructor() {}

  public static getInstance(): DefineOptionCacheService {
    if (!DefineOptionCacheService.instance) {
      DefineOptionCacheService.instance = new DefineOptionCacheService();
    }
    return DefineOptionCacheService.instance;
  }

  // Load all define option
  public async load(): Promise<void> {
    if (this.loaded) return;

    const options = await DefineOptionModel.find({
      op_is_active: true,
    }).lean();

    for (const opt of options) {
      this.optionMap.set(opt.op_id, opt);
    }

    this.loaded = true;
    console.log("Load define option cache completed");
  }

  // Get by op_id
  public async getByKey(op_id: string) {
    if (!this.loaded) {
      await this.load();
    }

    return this.optionMap.get(op_id);
  }

  // Get value
  public async getValue(op_id: string) {
    const opt = await this.getByKey(op_id);
    return opt?.op_value;
  }

  // Reload cache
  public async reload(): Promise<void> {
    this.loaded = false;
    this.optionMap.clear();
    await this.load();
  }
}

export const defineOptionCacheService = DefineOptionCacheService.getInstance();
