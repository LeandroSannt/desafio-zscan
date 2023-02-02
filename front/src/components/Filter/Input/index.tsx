import React from "react";

import { ContainerInput } from "../styles";
import { AiOutlineSearch } from "react-icons/ai";
import { useStates } from "../../../hooks/useState";
const Input: React.FC = () => {
  const { selectFocus, setSelectFocus, setValueSelect, valueSelect } =
    useStates();

  return (
    <ContainerInput selectFocus={selectFocus}>
      <AiOutlineSearch size={"14px"} />
      <input
        placeholder="/população/sp"
        onFocus={() => {
          setSelectFocus(true);
        }}
        onBlur={() => {
          setSelectFocus(false);
        }}
        onChange={(e) => {
          setValueSelect(e.target.value);
        }}
        value={valueSelect}
      />
    </ContainerInput>
  );
};
export default Input;
