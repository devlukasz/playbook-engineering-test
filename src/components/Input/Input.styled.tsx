import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  column-gap: 10px;
`;

export const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid black;
  outline: none;
`;

export const ErrorMessage = styled.span`
  color: red;
`;