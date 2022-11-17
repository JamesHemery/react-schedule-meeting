import styled from 'styled-components';

type ButtonProps = {
  selected?: boolean;
  primaryColor: string;
  borderRadius: number;
  primaryColorFaded: string;
};

export const ThemedButton = styled.button<ButtonProps>`
  padding: 16px;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  color: ${({ selected, primaryColor }) => (selected ? `rgb(255, 255, 255)` : primaryColor)};
  background-color: ${({ selected, primaryColor }) => (selected ? primaryColor : `rgb(255, 255, 255)`)};
  :hover {
    opacity: 0.8;
    background-color: ${({ selected, primaryColor, primaryColorFaded }) =>
      selected ? primaryColor : primaryColorFaded};
  }
`;

export const StartTimeGridItemButton = styled.button<ButtonProps>`
  padding: 5px 14px;
  margin: 9px;
  border-color: ${({ primaryColor }) => primaryColor};
  border-style: solid;
  border-width: 1px;
  color: ${({ selected, primaryColor }) => (selected ? `rgb(255, 255, 255)` : primaryColor)};
  background-color: ${({ selected, primaryColor }) => (selected ? primaryColor : `rgb(255, 255, 255)`)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  :hover {
    background-color: ${({ primaryColor }) => primaryColor};
    color: #fff;
  }
`;
