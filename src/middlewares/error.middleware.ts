import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../types/api-response";
import { ApiError } from "../utils/api-error";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response<ApiResponse<undefined>>,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Internal server error";

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof Error) {
    message = err.message;
  }

  console.error(err);

  return res.status(statusCode).json({
    status: "error",
    code: statusCode,
    message,
  });
};
