import app from "./app";
import { env } from "./configs/env";
import { connectDB } from "./configs/database";
import { initRoles } from "./utils/initRole";
import { roleCacheService } from "./services/roleCache.service";
import { defineOptionCacheService } from "./services/defineOptionCache.service";
import { initDefineOptions } from "./utils/initDefineOptions";

const startServer = async () => {
  await connectDB();

  // Initialize roles
  await initRoles();

  // Initialize define options
  await initDefineOptions();

  // Load caches
  await roleCacheService.load();
  await defineOptionCacheService.load();

  // Start server
  app.listen(env.PORT, () => {
    console.log(`============ Server running on port ${env.PORT} ============`);
  });
};

startServer();
