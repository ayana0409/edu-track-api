import { Router } from "express";
import authRoutes from "./auth.route";

const router = Router();

router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API is running",
  });
});

router.use("/auth", authRoutes);

export default router;
