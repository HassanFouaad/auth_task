import { Router } from "express";

import { authRouter, authBaseRoute } from "./auth/router";

const baseRouter = Router();

baseRouter.use(authBaseRoute, authRouter);

export { baseRouter as apiBaseRouter };
