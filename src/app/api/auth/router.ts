import { Router } from "express";
import { loginController, viewProfileController } from "./controller";
import { validator } from "../../middlewares/validator";
import { loginSchema } from "./schema";
import { isAuth } from "../../middlewares/isAuthenticated";
const router = Router();

const routes = {
  base: "/auth",
  root: "/",
  login: "/login",
  profile: "/profile",
};

/// Login route
router.post(routes.login, validator(loginSchema), loginController);

// Protected route

router.get(routes.profile, isAuth, validator({} as any), viewProfileController);

const authBaseRoute = routes.base;

export { router as authRouter, authBaseRoute };
