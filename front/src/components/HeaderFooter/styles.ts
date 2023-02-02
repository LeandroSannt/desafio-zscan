import styled from "styled-components";

interface props {
  header?: boolean;
}

export const Container = styled.div<props>`
  width: 100%;
  min-height: 40px;

  background-color: ${({ header }) => (!header ? "#404040" : "#ccc6c6")};
`;
