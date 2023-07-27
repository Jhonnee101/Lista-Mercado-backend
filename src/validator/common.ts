import { ApiError } from "../types/error";

export function validateRequired(value: any, error: ApiError) {
  if (!value || value === "") throw error;
}

export function validateType(value: any, error: ApiError, type = 'string') {
  if (typeof value !== type) throw error;
}

export function validateRequiredAndType(value: any, requiredError: ApiError, typeError: ApiError, type = 'string') {
  validateRequired(value, requiredError);
  validateType(value, typeError, type);
}
