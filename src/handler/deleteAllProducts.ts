import { NextFunction, Request, Response } from "express";
import { deleteAllProducts } from "../repository/products";

export async function deleteAllProductsHandler(_req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    await deleteAllProducts();

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
}
