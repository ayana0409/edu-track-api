import { Request } from "express";
import { verifyAccessToken } from "./utils/jwt";
import { ApiError } from "./utils/api-error";

export async function expressAuthentication(
  request: Request,
  securityName: string,
  scopes?: string[]
) {
  if (securityName !== "jwt") return;

  const authHeader = request.headers.authorization;
  if (!authHeader) throw new ApiError(401, "Authorization header missing");

  const token = authHeader.split(" ")[1];
  if (!token) throw new ApiError(401, "Bearer token missing");

  const payload = verifyAccessToken(token);

  if (scopes && scopes.length > 0) {
    if (!scopes.includes(payload.role)) {
      throw new ApiError(403, "Forbidden");
    }
  }

  // object inject vào @Request()
  return {
    id: payload.userId,
    role: payload.role,
  };
}
