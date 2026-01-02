export function parseEnvValue(value: string | undefined): any {
  if (value === undefined) return null;

  // try parse JSON
  try {
    return JSON.parse(value);
  } catch {
    // boolean
    if (value === "true") return true;
    if (value === "false") return false;

    // number
    if (!isNaN(Number(value))) return Number(value);

    return value;
  }
}
