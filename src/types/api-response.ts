export type ApiStatus = "success" | "error";

export interface ApiResponse<T = undefined> {
  status: ApiStatus;
  code: number;
  message?: string;
  data?: T;
}
