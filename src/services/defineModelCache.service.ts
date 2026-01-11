import { DefineModelModel } from "../models/define-model.model";

class DefineModelCacheService {
  private static instance: DefineModelCacheService;

  private modelMap: Map<string, any> = new Map();
  private loaded = false;

  private constructor() {}

  public static getInstance(): DefineModelCacheService {
    if (!DefineModelCacheService.instance) {
      DefineModelCacheService.instance = new DefineModelCacheService();
    }
    return DefineModelCacheService.instance;
  }

  // Load all active models
  public async load(): Promise<void> {
    if (this.loaded) return;

    const models = await DefineModelModel.find({
      ml_is_active: true,
    }).lean();

    for (const m of models) {
      this.modelMap.set(m.ml_id, m);
    }

    this.loaded = true;
    console.log("Load define model cache completed");
  }

  // Get by ml_id
  public async getByKey(ml_id: string) {
    if (!this.loaded) {
      await this.load();
    }

    return this.modelMap.get(ml_id);
  }

  // Reload cache
  public async reload(): Promise<void> {
    this.loaded = false;
    this.modelMap.clear();
    await this.load();
  }
}

export const defineModelCacheService = DefineModelCacheService.getInstance();
