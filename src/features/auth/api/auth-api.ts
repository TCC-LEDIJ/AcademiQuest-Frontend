import { authClient } from "@/services/auth-client";
import { registerUser } from "@/services/auth-service";
import type { AuthErrorContext, RegisterPayload, SignInPayload } from "../types";

type SignInHandlers = {
  onRequest?: () => void;
  onSuccess?: () => void;
  onError?: (ctx: AuthErrorContext) => void;
};

export async function signInWithEmail(
  payload: SignInPayload,
  handlers: SignInHandlers
) {
  return authClient.signIn.email(payload, handlers);
}

export async function registerWithEmail(payload: RegisterPayload) {
  return registerUser(payload);
}
