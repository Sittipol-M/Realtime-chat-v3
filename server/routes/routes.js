import { Router } from "express";
import checkAuth from "../others/middlewares/checkAuth.js";
import authRoute from "../src/auth/authRoutes.js";
import userRoute from "../src/user/userRoutes.js";
const router = Router();

router.use("", authRoute);
router.use("/users", checkAuth, userRoute);

export default router;
