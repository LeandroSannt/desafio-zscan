import React from "react";

import { Container } from "./styles";

interface HeaderFooterProps {
  header?: boolean;
}

const HeaderFooter: React.FC<HeaderFooterProps> = ({ header = false }) => {
  return <Container header={header}></Container>;
};
export default HeaderFooter;
