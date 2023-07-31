import { NextFunction, Request, Response } from "express";
import { registerUserValidator } from "../validator/registerUser";
import bcrypt from "bcrypt";
import { UserModel } from "../models/user";
import { registerUser } from "../repository/users";

const saltRounds = 10;

export async function registerUserHandler(req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    console.log(req.body);
    const request = registerUserValidator(req);

    const passwordHash = await bcrypt.hash(request.password, saltRounds)

    const userModel: UserModel = {
      passwordHash,
      username: request.username,
      createAt: new Date().valueOf(),
    }

    await registerUser(userModel)

    // TODO: add lib and generate JWT

    const token = ""

    return res.json({ token })
  } catch (error) {
    next(error);
  }
}
