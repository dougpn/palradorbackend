import { Router } from "express";

import UserController from "./controllers/UserController";
import PostsController from "./controllers/PostsController";

const routes = Router();

routes.post("/login", UserController.login);
routes.post("/registrar", UserController.create);
routes.post("/createpost", PostsController.createpost);
routes.post("/findpost", PostsController.findpost);
routes.put("/editpost", PostsController.editpost);
routes.delete("/deletepost", PostsController.deletepost);

export default routes;
