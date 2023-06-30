
import styled, { css } from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const commonButtonStyling = css`
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
`

export const CancelButton = styled.button`
  ${commonButtonStyling}
  background-color: #e0e0e0;
  color: #333;
`;

export const AcceptButton = styled.button`
 ${commonButtonStyling}
  background-color: #6bbb6e;
  color: white;
`;