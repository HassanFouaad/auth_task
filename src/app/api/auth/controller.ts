import { controller } from "../../middlewares/controller";
import { loginService } from "./services/user";

const loginController = controller(loginService);

export { loginController };
