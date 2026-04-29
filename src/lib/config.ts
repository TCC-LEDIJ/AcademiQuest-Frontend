const DEFAULT_AUTH_BASE_URL = "http://localhost:8080";

function resolveAuthBaseUrl(): string {
  const configured = process.env.NEXT_PUBLIC_BACKEND_URL?.trim();

  if (!configured) {
    return DEFAULT_AUTH_BASE_URL;
  }

  try {
    const normalized = new URL(configured);
    normalized.pathname = normalized.pathname.replace(/\/$/, "");
    return normalized.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_AUTH_BASE_URL;
  }
}

export const AUTH_BASE_URL = resolveAuthBaseUrl();
