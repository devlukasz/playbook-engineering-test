import React from 'react'
import { StyledTable, TableTH, TableHead, TableTD } from './Table.styled'
import { Button } from '../../Button'

export const Table = () => {
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
        <tr>
          <TableTD>Train ticket</TableTD>
          <TableTD>100</TableTD>
          <TableTD>22.54</TableTD>
          <TableTD><Button onClick={() => ({})}>Delete</Button></TableTD>
        </tr>

        <tr>
          <TableTD>Company dinner</TableTD>
          <TableTD>200</TableTD>
          <TableTD>45.09</TableTD>
          <TableTD><Button onClick={() => ({})}>Delete</Button></TableTD>
        </tr>

        <tr>
          <TableTD>Family dinner</TableTD>
          <TableTD>200</TableTD>
          <TableTD>45.09</TableTD>
          <TableTD><Button onClick={() => ({})}>Delete</Button></TableTD>
        </tr>
      </tbody>
    </StyledTable>
  )
}
