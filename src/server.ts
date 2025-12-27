import app from "./app";
import { env } from "./configs/env";
import { connectDB } from "./configs/database";
import { initRoles } from "./utils/initRole";

const startServer = async () => {
  await connectDB();
  await initRoles();

  app.listen(env.PORT, () => {
    console.log(`🚀 Server running on port ${env.PORT}`);
  });
};

startServer();
