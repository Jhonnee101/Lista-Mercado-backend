import { Request } from "express";
import { RegisterProductRequest } from "../types/product";
import * as errors from "../api/errors"

const productNameMaxLength = 100;

export function registerProductValidator(req: Request): RegisterProductRequest {
  const productName = req.body?.productName as string;
  if (!productName || productName === "") throw errors.requiredField("productName");
  if (typeof productName !== "string") throw errors.invalidField("productName");
  if (productName.length > productNameMaxLength) throw errors.fieldTooLong("productName", productNameMaxLength);
  return {
    productName,
  };
}
