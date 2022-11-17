import styled from 'styled-components';

type ButtonProps = {
  selected?: boolean;
  primaryColor: string;
  borderRadius: number;
  primaryColorFaded: string;
  isActive: boolean;
};

export const ThemedButton = styled.button<ButtonProps>`
  padding: 16px;
  border: none;
  color: ${({ selected }) => (selected ? `rgb(255, 255, 255)` : `rgb(20,20,20)`)};
  background-color: ${({ selected, primaryColor }) => (selected ? primaryColor : `rgba(0,0,0,0)`)};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
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
  color: ${({ primaryColor }) => primaryColor};
  border-style: solid;
  border-width: 1px;
  background-color: #fff;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  opacity: 1;
  :hover {
    background-color: ${({ primaryColor }) => primaryColor};
    color: #fff;
  }
  ${({ isActive, primaryColor }) =>
    isActive &&
    `
    background-color: ${primaryColor};
    color: #fff;
  `}
`;
