import express from "express";
import { registerUserHandler } from "../handler/registerUser";

const userRouter = express.Router();

userRouter.post("/", registerUserHandler);

export { userRouter }
