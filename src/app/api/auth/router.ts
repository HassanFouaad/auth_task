import { Router } from "express";
import { loginController } from "./controller";
import { validator } from "../../middlewares/validator";
import { loginSchema } from "./schema";
const router = Router();

const routes = {
  base: "/auth",
  root: "/",
  login: "/login",
};

router.post(routes.login, validator(loginSchema), loginController);

const authBaseRoute = routes.base;

export { router as authRouter, authBaseRoute };
