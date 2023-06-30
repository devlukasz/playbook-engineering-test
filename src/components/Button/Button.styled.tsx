import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  padding: 4px 24px;
  background-color: #e2e2e290;
  border: 1px solid #1b1a1a90;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  color: black;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 4px;
  }
`;