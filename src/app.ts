import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";
import { errorHandler } from "./middlewares/error.middleware";
import { RegisterRoutes } from "./routes/routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

RegisterRoutes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
app.use(errorHandler);

export default app;
