import React, { useState } from "react";

import { RadioBox, TransactionTypeContainer } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "./Input";
import { useStates } from "../../hooks/useState";

const Filter: React.FC = () => {
  const { setTypes, types } = useStates();

  return (
    <>
      <TransactionTypeContainer>
        <RadioBox
          type="button"
          onClick={() => setTypes("all")}
          isActive={types === "all"}
          activeColor="orange"
        >
          <AiOutlineSearch size={"14px"} />
          <span>/estados</span>
        </RadioBox>

        <Input />

        <RadioBox
          type="button"
          onClick={() => setTypes("allState")}
          isActive={types === "allState"}
          activeColor="orange"
        >
          <AiOutlineSearch size={"14px"} />

          <span>/v2/estados</span>
        </RadioBox>
      </TransactionTypeContainer>
    </>
  );
};
export { Filter };
