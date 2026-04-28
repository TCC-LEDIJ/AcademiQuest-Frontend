"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmail } from "../api/auth-api";
import type { AuthErrorContext } from "../types";

export function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmail(
        {
          email,
          password,
          callbackURL: "/dashboard",
          rememberMe: true,
        },
        {
          onRequest: () => setLoading(true),
          onSuccess: () => {
            router.push("/dashboard");
          },
          onError: (ctx: AuthErrorContext) => {
            setError(ctx?.error?.message || "Sign in failed");
          },
        }
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p>{error}</p>}

        <div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </div>
      </form>
    </main>
  );
}
