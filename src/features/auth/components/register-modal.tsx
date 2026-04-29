"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerWithEmail } from "../api/auth-api";
import { useAuthForm } from "../hooks/use-auth-form";
import { AuthModal } from "./auth-modal";

export function RegisterModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { loading, error, handleSubmit } = useAuthForm(async () => {
    await registerWithEmail({ email, name, password });
    router.push("/dashboard");
  });

  return (
    <AuthModal
      title="Cadastra-se"
      submitLabel="Criar conta"
      loadingLabel="Criando conta..."
      error={error}
      loading={loading}
      onSubmit={handleSubmit}
      onClose={onClose}
      fields={[
        { name: "name", label: "Nome completo", type: "text", value: name, onChange: setName },
        { name: "email", label: "Email", type: "email", value: email, onChange: setEmail },
        { name: "password", label: "Senha", type: "password", value: password, onChange: setPassword, minLength: 8 },
      ]}
    />
  );
}