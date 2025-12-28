import { Request, Response, NextFunction } from "express";
import { maskSensitiveData } from "../utils/mask-sensitive.util";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const startTime = Date.now();

  const { method, originalUrl } = req;

  if (originalUrl.includes("/swagger")) {
    return next();
  }

  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const timestamp = new Date().toISOString();

    const isSuccess = res.statusCode < 400;

    const logData = {
      time: timestamp,
      method,
      endpoint: originalUrl,
      statusCode: res.statusCode,
      success: isSuccess,
      duration: `${duration}ms`,
      payload: {
        body: maskSensitiveData(req.body),
        query: maskSensitiveData(req.query),
        params: maskSensitiveData(req.params),
        headers: {
          authorization: req.headers.authorization ? "***" : undefined,
        },
      },
    };

    if (isSuccess) {
      console.log("API LOG:", logData);
    } else {
      console.error("API ERROR LOG:", logData);
    }
  });

  next();
};
