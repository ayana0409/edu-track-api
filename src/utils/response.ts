import { Response } from "express";
import { ApiResponse } from "../types/api-response";

export const successResponse = <T>(
  data: T,
  code = 200,
  message?: string
): ApiResponse<T> => ({
  status: "success",
  code,
  data,
  ...(message !== undefined ? { message } : {}),
});

export const errorResponse = (
  code: number,
  message: string
): ApiResponse<undefined> => ({
  status: "error",
  code,
  message,
});
