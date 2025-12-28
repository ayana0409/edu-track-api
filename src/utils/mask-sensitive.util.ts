import { SENSITIVE_FIELDS } from "../configs/sensitive-fields";

export const maskSensitiveData = (data: any): any => {
  if (!data || typeof data !== "object") return data;

  if (Array.isArray(data)) {
    return data.map(maskSensitiveData);
  }

  const masked: any = {};

  for (const key of Object.keys(data)) {
    if (SENSITIVE_FIELDS.includes(key.toLowerCase())) {
      masked[key] = "***";
    } else {
      masked[key] = maskSensitiveData(data[key]);
    }
  }

  return masked;
};
