import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { errorHandler } from "./middlewares/error.middleware";
import { RegisterRoutes } from "./routes/routes";
import { loggerMiddleware } from "./middlewares/logger.middleware";

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

app.use(errorHandler);

export default app;
