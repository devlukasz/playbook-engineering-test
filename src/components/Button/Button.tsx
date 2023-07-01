import React, { FC, ReactNode, MouseEvent } from 'react';
import { StyledButton } from './Button.styled';

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  type?: ButtonType;
}

export const Button: FC<ButtonProps> = ({ children, onClick, type = 'button' }) => {
  return (
    <StyledButton onClick={onClick} type={type}>{children}</StyledButton>
  );
};
