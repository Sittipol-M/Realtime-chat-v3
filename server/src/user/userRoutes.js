import { Router } from "express";
import { getUsers } from "./userController.js";
const userRoute = Router();

userRoute.get("/", getUsers);

export default userRoute;
