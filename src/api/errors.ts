import { ApiError } from "../types/error";

export const internalError: ApiError = {
  httpCode: 500,
  message: "Internal Error Ocurred"
};

export const requiredField = (fieldName: string): ApiError => ({
  httpCode: 400,
  message: `Campo "${fieldName}" é obrigatório`
});

export const invalidField = (fieldName: string): ApiError => ({
  httpCode: 400,
  message: `Campo "${fieldName}" é inválido`
});

export const fieldTooLong = (fieldName: string, max: number): ApiError => ({
  httpCode: 400,
  message: `Campo "${fieldName}" é muito longo (máximo ${max})`
});

export const fieldTooShort = (fieldName: string, max: number): ApiError => ({
  httpCode: 400,
  message: `Campo "${fieldName}" é muito curto (mínimo ${max})`
});

export const resourceNotFound = (resourceName: string, identifier: any): ApiError => ({
  httpCode: 404,
  message: `Recurso "${resourceName}" com identificador "${identifier}" não foi encontrado`
})
