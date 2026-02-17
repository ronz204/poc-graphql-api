import { t } from "elysia";

export const LoginSchema = t.Object({
  email: t.String(),
  password: t.String(),
});

export type LoginCommand = typeof LoginSchema.static;

export type LoginResponse = {
  message: string;
};
