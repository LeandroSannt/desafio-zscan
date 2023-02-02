import React, { createContext, useState, useContext, useEffect } from "react";
import States from "../pages/layout";
import api from "../services/api";

interface StatesProps {
  uf: string;
  populacao: number;
  nome?: String;
}

interface StateContextState {
  types: string;
  setTypes: React.Dispatch<React.SetStateAction<string>>;
  valueSelect: string;
  setValueSelect: React.Dispatch<React.SetStateAction<string>>;
  selectFocus: boolean;
  setSelectFocus: React.Dispatch<React.SetStateAction<boolean>>;
  states: StatesProps[];
}

interface Props {
  children: any;
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const StateContext = createContext<StateContextState>({} as StateContextState);

const StateProvider = ({ children }: Props) => {
  const [types, setTypes] = useState("");
  const [selectFocus, setSelectFocus] = useState(false);
  const [valueSelect, setValueSelect] = useState("");

  const [states, setStates] = useState<StatesProps[]>([]);

  useEffect(() => {
    if (selectFocus) {
      setTypes("");
    }

    if (types) {
      setValueSelect("");
    }
  }, [selectFocus, types]);

  useEffect(() => {
    let url = "";

    if (types === "all") {
      url = "";
    } else if (types === "allState") {
      url = "populacao";
    } else if (valueSelect.length >= 2) {
      url = `populacao/${valueSelect}/`;
    }

    api.get(url).then((response) => {
      setStates(response.data);
    });
  }, [types, valueSelect]);

  return (
    <StateContext.Provider
      value={{
        states,
        setValueSelect,
        valueSelect,
        types,
        selectFocus,
        setSelectFocus,
        setTypes,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

function useStates(): StateContextState {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("insira o StateProvider ao redor do seu elemento");
  }
  return context;
}

export { StateProvider, useStates };
