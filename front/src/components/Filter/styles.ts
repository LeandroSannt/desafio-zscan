import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
export const TransactionTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "orange" | "default";
}

const colors = {
  orange: "#fc5623",
  default: "#E6E5E5",
};

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: inherit;
  height: 50px;
  color: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "#E6E5E5"};

  transition: all 200ms;

  ${({ isActive }) =>
    isActive &&
    css`
      color: #fc5623;
    `}

  span {
    display: inline-block;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
  }
`;

interface SelectFocus {
  selectFocus: boolean;
}

export const ContainerInput = styled.div<SelectFocus>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;

  svg {
    color: #e6e5e5;
    font-size: 14px;
    ${({ selectFocus }) =>
      selectFocus &&
      css`
        color: #fc5623;
      `};
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    transition: all 200ms;
    text-align: end;

    &::placeholder {
      font-size: 1rem;
      color: #e6e5e5;
      margin-left: auto;
      text-align: end;
    }

    color: #e6e5e5;
    ${({ selectFocus }) =>
      selectFocus &&
      css`
        color: #fc5623;

        &::placeholder {
          color: #fc5623;
        }

        svg {
          font-size: 14px;

          color: #fc5623;
        }
      `};
  }
`;
