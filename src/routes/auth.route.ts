import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register new user
 */
router.post("/register", register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login
 */
router.post("/login", login);

export default router;
