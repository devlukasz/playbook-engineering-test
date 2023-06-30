import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 700px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16),
    0px 3px 6px rgba(0, 0, 0, 0.23);

  @media (max-width: 950px) {
    max-width: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const SumWrapper = styled.div`
  margin-top: 25px;
  font-weight: bold;
`;
