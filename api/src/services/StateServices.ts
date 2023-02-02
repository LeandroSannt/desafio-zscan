import AppError from "../errors/AppErrors";
import api from "../config/axios";
import { IState } from "../interfaces/state";
interface UserProps {
  name: string;
  login: string;
  password: string;
  email: string;
}

interface UserPropsGet {
  payload: UserProps;
  id: number;
}

class StateService {
  async getAll(stateName?: boolean) {
    const { data } = await api.get("");

    const statesPopulations = data.geonames.map((state: IState) => {
      return {
        ...(stateName && { nome: state.name }),
        uf: state.adminCodes1.ISO3166_2,
        populacao: state.population,
      };
    });

    return statesPopulations;
  }

  async getByUf(uf: string) {
    const statesPopulations = await this.getAll();

    const state = statesPopulations.filter(
      (state: { population: number; uf: string }) => state.uf === uf
    );

    if (!state) {
      return { data: "Estado não encontrado", code: 404 };
    }

    return { data: state, code: 200 };
  }

  async getAllPopulation() {
    const estados = await this.getAll(true);

    return estados;
  }
}

export { StateService };
