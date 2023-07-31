import { Request } from "express";
import { RegisterUserRequest } from "../types/user";
import * as errors from "../api/errors"
import { validateRequiredAndType } from "./common";

const maxUsernameLength = 50;
const minUsernameLength = 6;
const minPasswordLength = 6;
const maxPasswordLength = 72;

export function registerUserValidator(req: Request): RegisterUserRequest {
  validateRequiredAndType(req.body.username, errors.requiredField("username"), errors.invalidField("username"));
  validateRequiredAndType(req.body.password, errors.requiredField("password"), errors.invalidField("password"));
  const username = req.body.username as string;
  const password = req.body.password as string;
  if (username.length > maxUsernameLength) throw errors.fieldTooLong("username", maxUsernameLength);
  if (username.length < minUsernameLength) throw errors.fieldTooShort("username", minUsernameLength);
  if (password.length < minPasswordLength) throw errors.fieldTooShort("password", minPasswordLength);
  if (password.length > maxPasswordLength) throw errors.fieldTooLong("password", maxPasswordLength);
  return {
    username: username,
    password: password,
  };
}
