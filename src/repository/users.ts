import knexInstace from "../config/database";
import { UserModel } from "../models/user";

export async function registerUser(model: UserModel): Promise<void> {
  await knexInstace('users').insert(model);
}
