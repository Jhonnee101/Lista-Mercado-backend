import { NextFunction, Request, Response } from "express";
import { ApiError } from "../types/error";
import { internalError } from "../api/errors";

export function errorMiddleware(err: unknown, _req: Request, res: Response, _next: NextFunction): Response {
  if (!isApiError(err)) {
    console.log(err);
    return res.status(internalError.httpCode).send(internalError.message);
  }
  return res.status(err.httpCode).send(err.message)
}

function isApiError(error: any): error is ApiError {
  if (!error?.httpCode || typeof error.httpCode !== 'number') return false;
  if (!error?.message || typeof error.message !== 'string') return false;
  return true;
}
