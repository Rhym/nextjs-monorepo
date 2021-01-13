import * as React from "react";
import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<any> {
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  font-size: 1.1rem;
`;

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
