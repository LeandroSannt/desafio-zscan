import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px 60px;
  margin-bottom: auto;
  max-height: calc(100vh - 80px);
  overflow: auto;

  strong + strong {
    margin: 20px;
  }
`;
