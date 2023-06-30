import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
`;

export const InputLabel = styled.label`
  font-weight: bold;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  background-color: #e2e2e271;
  outline: none;
  font-size: 16px;

  &:focus {
    background-color: #e6e6e6ed;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
`;