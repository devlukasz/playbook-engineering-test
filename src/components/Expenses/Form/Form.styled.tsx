import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-items: end;
  gap: 15px;
  margin: 35px 0px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 20px;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;