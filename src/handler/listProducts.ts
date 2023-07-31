import { NextFunction, Request, Response } from "express";
import { listProducts } from "../repository/products";

export async function listProductsHandler(_req: Request, res: Response, next: NextFunction): Promise<Response> {
  try {
    const result = await listProducts();
    return res.json(result);
  } catch (error) {
    next(error);
  }
}
