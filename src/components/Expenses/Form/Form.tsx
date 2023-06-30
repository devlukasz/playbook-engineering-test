import React from 'react'

import { ButtonWrapper, Container, StyledForm } from './Form.styled'
import { Input } from '../../Input'
import { Button } from '../../Button'

export const Form = () => {
  return (
    <StyledForm>
      <Container>
        <Input
          value=""
          name="transactionTitle"
          label="Title of transaction"
          type="text"
          handleChange={(e) => console.log(e.target.value)}
        />

        <Input
          value=""
          name="amountInPLN"
          label="Amount (in PLN)"
          type="text"
          handleChange={(e) => console.log(e.target.value)}
        />
      </Container>

      <ButtonWrapper>
        <Button onClick={() => ({})}>
          Add
        </Button>
      </ButtonWrapper>
    </StyledForm>
  )
}
