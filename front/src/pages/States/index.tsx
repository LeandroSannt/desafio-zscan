import React from "react";

import { Container } from "./styles";
import Layout from "../layout";
import { useStates } from "../../hooks/useState";
const States: React.FC = () => {
  const { states } = useStates();

  return (
    <Layout>
      <Container>
        {states.map((state) => {
          return (
            <div>
              <strong>{state?.nome || state.uf}</strong>
              <strong>{state.populacao}</strong>
            </div>
          );
        })}
      </Container>
    </Layout>
  );
};
export default States;
