import { controller } from "../../middlewares/controller";
import { loginService, viewUserProfileService } from "./services/user";

const loginController = controller(loginService);
const viewProfileController = controller(viewUserProfileService);

export { loginController, viewProfileController };
