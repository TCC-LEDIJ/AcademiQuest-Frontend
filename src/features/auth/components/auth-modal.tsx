"use client";

import { useState } from "react";
import { playfair } from "@/lib/fonts";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  value: string;
  onChange: (v: string) => void;
  minLength?: number;
};

type AuthModalProps = {
  title: string;
  submitLabel: string;
  loadingLabel: string;
  fields: Field[];
  error: string | null;
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
};

export function AuthModal({
  title,
  submitLabel,
  loadingLabel,
  fields,
  error,
  loading,
  onSubmit,
  onClose,
}: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="rounded-3xl p-10 flex flex-col gap-6 w-full max-w-md" style={{ backgroundColor: "var(--ink)" }}>

        <h2 className={`text-4xl font-bold text-white ${playfair.className}`}>
          {title}
        </h2>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className={`text-white text-base ${playfair.className}`}>{field.label}</label>

              {field.type === "password" ? (
                <div className="flex rounded-xl overflow-hidden">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    required
                    minLength={field.minLength}
                    className="flex-1 px-5 py-3 text-base border-none outline-none"
                    style={{ backgroundColor: "var(--stone)", color: "var(--ink)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-4 text-sm font-semibold border-none cursor-pointer"
                    style={{ backgroundColor: "var(--stone)", color: "var(--brown)" }}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              ) : (
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  required
                  className="rounded-xl px-5 py-3 text-base border-none outline-none"
                  style={{ backgroundColor: "var(--stone)", color: "var(--ink)" }}
                />
              )}
            </div>
          ))}

          {error && <p className="text-sm" style={{ color: "var(--red)" }}>{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`rounded-xl px-5 py-3 text-white text-lg font-semibold cursor-pointer border-none mt-2 ${playfair.className}`}
            style={{ backgroundColor: "var(--red)" }}
          >
            {loading ? loadingLabel : submitLabel}
          </button>

          <button
            type="button"
            onClick={onClose}
            className={`text-base cursor-pointer border-none bg-transparent ${playfair.className}`}
            style={{ color: "var(--stone)" }}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
}