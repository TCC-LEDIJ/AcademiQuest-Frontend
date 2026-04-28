import { AUTH_BASE_URL } from "@/lib/config";
type RegisterPayload = {
  email: string;
  name: string;
  password: string;
};

export async function registerUser(payload: RegisterPayload): Promise<void> {
  const response = await fetch(`${AUTH_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const responseText = await response.text();
    throw new Error(responseText || "Sign up failed");
  }
}
