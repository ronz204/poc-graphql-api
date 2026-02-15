import { Elysia } from "elysia";

import { CorsConfig } from "@Configs/CORS";
import { YogaConfig } from "@Configs/Yoga";

import { AuthController } from "@Controllers/AuthController";
import { HealthController } from "@Controllers/HealthController";

const app = new Elysia()
  .use(CorsConfig)
  .use(YogaConfig)
  .use(HealthController)
  .use(AuthController)
  .listen(process.env.PORT!);

const url = `http://${app.server?.hostname}:${app.server?.port}`;
console.log(`🦊 Elysia is running at ${url}`);
