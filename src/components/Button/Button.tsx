import React, { FC, ReactNode, MouseEvent } from 'react';
import { StyledButton } from './Button.styled';

interface ButtonProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  )
};

