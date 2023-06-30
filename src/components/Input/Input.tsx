import React, { FC, ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { ErrorMessage, Wrapper, StyledInput, Container, InputLabel } from './Input.styled';

interface InputProps {
  name: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  value: string | number;
  errorMessage?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  label,
  type,
  name,
  errorMessage,
  value,
  handleChange
}) => {
  return (
    <Container>
      <Wrapper>
        {label && <InputLabel>{label}</InputLabel>}
        <StyledInput
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </Wrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
};
