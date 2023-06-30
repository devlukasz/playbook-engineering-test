import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TableHead = styled.thead`
  background-color: #d4d4d4c3;
  width: 100%;
  text-align: center;
`;

const commonTableStyling = css`
  text-align: center;
  padding: 8px;
`

export const TableTD = styled.td`
  ${commonTableStyling}
`;

export const TableTH = styled.th`
  ${commonTableStyling}
  word-break: break-word;
`;

