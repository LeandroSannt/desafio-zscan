import React from "react";

import { Container } from "./styles";
import { Filter } from "../Filter";
const Sidebar: React.FC = () => {
  return (
    <Container>
      <Filter />
    </Container>
  );
};
export default Sidebar;
