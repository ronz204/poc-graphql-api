import type { Handler } from "@Handlers/Handler";
import type { LoginCommand } from "./LoginSchema";
import type { LoginResponse } from "./LoginSchema";

export class LoginHandler implements Handler<LoginCommand, LoginResponse> {
  constructor() {};

  public async handle(input: LoginCommand): Promise<LoginResponse> {
    console.log(input.email);
    console.log(input.password);

    return { message: "Login successful 123" };
  };
};
