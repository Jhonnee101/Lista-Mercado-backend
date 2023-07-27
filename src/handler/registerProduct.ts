import { NextFunction, Request, Response } from "express";
import { registerProductValidator } from "../validator/registerProduct";
import { registerProduct } from "../repository/products";

export async function registerProductHandler(req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    const request = registerProductValidator(req);

    await registerProduct(request.productName);

    return res.sendStatus(201)
  } catch (error) {
    next(error);
  }
}
