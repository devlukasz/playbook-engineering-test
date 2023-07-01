import React from 'react'
import { StyledTable, TableTH, TableHead, TableTD } from './Table.styled'
import { observer } from 'mobx-react-lite';
import { Button } from '../../Button'
import { useStore } from '../../../hooks/useStore';

export const Table = observer(() => {
  const { expensesStore } = useStore();

  return (
    <StyledTable>
      <TableHead>
        <tr>
          <TableTH>Title</TableTH>
          <TableTH>Amount (PLN)</TableTH>
          <TableTH>Amount (EUR)</TableTH>
          <TableTH>Options</TableTH>
        </tr>
      </TableHead>

      <tbody>
        {(expensesStore.expenseList).map(({ id, title, plnAmount, eurAmount }) => (
          <tr key={id}>
            <TableTD>{title}</TableTD>
            <TableTD>{plnAmount}</TableTD>
            <TableTD>{eurAmount}</TableTD>
            <TableTD ><Button onClick={() => expensesStore.removeExpense(id)}>Delete</Button></TableTD>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  )
})
