import React from 'react';
import { Text } from '../../typography';
import { HeaderWrapper, SumWrapper, Wrapper } from './Expenses.styled';
import { Form } from './Form';
import { Table } from './Table';
import { ConversionChange } from './ConversionChange';

export const Expenses = () => {

  return (
    <Wrapper>
      <HeaderWrapper>
        <Text type="h1">List of expenses</Text>
        <Text>1 EUR = 4,382 PLN</Text>
      </HeaderWrapper>

      <ConversionChange />

      <Form />

      <Table />

      {true && (
        <SumWrapper>
          <Text>Sum: 500 PLN (112.74 EUR) </Text>
        </SumWrapper>
      )}
    </Wrapper>
  );
};
