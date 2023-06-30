import React, { FC, ReactNode } from 'react';
import { AcceptButton, ButtonContainer, CancelButton, ModalContent, ModalOverlay } from './Modal.styled';

interface ModalProps {
  onCancel: () => void;
  onAccept: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ onCancel, onAccept, children }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <ButtonContainer>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <AcceptButton onClick={onAccept}>Accept</AcceptButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};