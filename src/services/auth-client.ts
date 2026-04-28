import { createAuthClient } from "better-auth/client";
import { AUTH_BASE_URL } from "@/lib/config";

export const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
});

export default authClient;
