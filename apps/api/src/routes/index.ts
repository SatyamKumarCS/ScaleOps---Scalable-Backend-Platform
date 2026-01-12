import { Router } from "express";
import healthRoutes from "./health.routes.js";
import authRoutes from "./auth.routes.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.use(healthRoutes)
router.use(authRoutes)
router.get("/protected", authMiddleware, (_req, res) => {
  res.json({ message: "You are authenticated" });
});

export default router;