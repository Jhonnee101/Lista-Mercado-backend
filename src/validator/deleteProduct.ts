import { Request } from "express";
import { DeleteProductRequest } from "../types/product";
import * as errors from "../api/errors"

export function deleteProductValidator(req: Request): DeleteProductRequest {
  const id = Number(req.params?.id);
  if (!id) throw errors.requiredField("id");
  return {
    id
  };
}
