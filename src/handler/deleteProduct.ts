import { NextFunction, Request, Response } from "express";
import { deleteProductValidator } from "../validator/deleteProduct";
import { deleteProduct } from "../repository/products";
import * as errors from "../api/errors"

export async function deleteProductHandler(req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    const request = deleteProductValidator(req);

    const afectedRows = await deleteProduct(request.id);
    if (afectedRows === 0) throw errors.resourceNotFound("products", request.id);

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}
