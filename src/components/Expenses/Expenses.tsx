import React from 'react';
import { observer } from 'mobx-react-lite';
import { Text } from '../../typography';
import { HeaderWrapper, SumWrapper, Wrapper } from './Expenses.styled';
import { Form } from './Form';
import { Table } from './Table';
import { ConversionChange } from './ConversionChange';
import { useStore } from '../../hooks/useStore';

export const Expenses = observer(() => {
  const { expensesStore: { conversionRate, expenseSum } } = useStore();

  return (
    <Wrapper>
      <HeaderWrapper>
        <Text type="h1">List of expenses</Text>
        <Text>1 EUR = {conversionRate} PLN</Text>
      </HeaderWrapper>

      <ConversionChange />

      <Form />

      <Table />

      {expenseSum.plnAmount > 0 && expenseSum.eurAmount > 0 && (
        <SumWrapper>
          <Text>Sum: {expenseSum.plnAmount} PLN ({expenseSum.eurAmount} EUR) </Text>
        </SumWrapper>
      )}
    </Wrapper>
  );
});

