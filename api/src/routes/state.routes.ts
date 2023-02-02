import Router from "express";

import { StateController } from "../controllers/StatesController";

const stateRouter = Router();

const stateController = new StateController();

stateRouter.get("/populacao/:uf", stateController.getByUf);
stateRouter.get("/", stateController.getAll);
stateRouter.get("/populacao/", stateController.getAllPopulation);

export { stateRouter };
