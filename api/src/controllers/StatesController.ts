import { Request, Response } from "express";

import { StateService } from "../services/StateServices";

class StateController {
  async getAll(request: Request, response: Response) {
    const stateService = new StateService();

    const allStates = await stateService.getAll();

    return response.json(allStates);
  }

  async getByUf(request: Request, response: Response) {
    const stateService = new StateService();

    const { uf } = request.params;

    const state = await stateService.getByUf(uf.toUpperCase());

    return response.status(state.code).json(state.data);
  }

  async getAllPopulation(request: Request, response: Response) {
    const stateService = new StateService();

    const getAllPopulation = await stateService.getAllPopulation();

    return response.json(getAllPopulation);
  }
}

export { StateController };
