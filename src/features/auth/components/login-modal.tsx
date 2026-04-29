"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "../api/auth-api";
import { useAuthForm } from "../hooks/use-auth-form";
import { AuthModal } from "./auth-modal";
import type { AuthErrorContext } from "../types";

export function LoginModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, handleSubmit } = useAuthForm(async () => {
    await signInWithEmail(
      { email, password, callbackURL: "/dashboard", rememberMe: true },
      {
        onSuccess: () => router.push("/dashboard"),
        onError: (ctx: AuthErrorContext) => {
          throw new Error(ctx?.error?.message || "Sign in failed");
        },
      }
    );
  });

  return (
    <AuthModal
      title="Fazer login"
      submitLabel="Entrar"
      loadingLabel="Entrando..."
      error={error}
      loading={loading}
      onSubmit={handleSubmit}
      onClose={onClose}
      fields={[
        { name: "email", label: "Email", type: "email", value: email, onChange: setEmail },
        { name: "password", label: "Senha", type: "password", value: password, onChange: setPassword },
      ]}
    />
  );
}