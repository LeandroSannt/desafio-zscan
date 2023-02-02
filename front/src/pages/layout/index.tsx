import React from "react";

import { Container } from "./styles";
import HeaderFooter from "../../components/HeaderFooter";
import Sidebar from "../../components/Sidebar";

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const States: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <div className="children">
        <HeaderFooter header />
        {children}
        <HeaderFooter />
      </div>
    </Container>
  );
};
export default States;
