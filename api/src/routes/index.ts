import { Router } from "express";
import { stateRouter } from "./state.routes";

const routes = Router();

routes.use("/estados", stateRouter);

export default routes;
