export type AuthErrorContext = {
  error?: {
    message?: string;
  };
};

export type SignInPayload = {
  email: string;
  password: string;
  callbackURL?: string;
  rememberMe?: boolean;
};

export type RegisterPayload = {
  email: string;
  name: string;
  password: string;
};
