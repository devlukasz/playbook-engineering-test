import React, { useState } from 'react';
import { Button } from '../../Button';
import { ButtonWrapper, Container, StyledForm } from './Form.styled';
import { Input } from '../../Input';
import { useStore } from '../../../hooks/useStore';
import { validate, FormErrors } from '../../../utils/validator';
import { expensesRules } from '../../../validation/expensesForm';

const initialFormState = {
  transactionTitle: '',
  amountInPLN: '',
};

export const Form = () => {
  const { expensesStore } = useStore();
  const [formValues, setFormValues] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate(formValues, expensesRules);

    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors)

      return;
    }


    expensesStore.addExpense(
      formValues.transactionTitle,
      parseFloat(formValues.amountInPLN)
    );
    setFormValues(initialFormState);
    setFormErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name !== 'amountInPLN') {
      setFormValues((prevState) => ({ ...prevState, [name]: value }));

      return;
    }

    const maxTwoDecimalPoints = /^\d+(\.\d{0,2})?$/;

    if (value === '' || maxTwoDecimalPoints.test(value)) {
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    }
  }


  return (
    <StyledForm onSubmit={handleSubmit}>
      <Container>
        <Input
          value={formValues.transactionTitle}
          name="transactionTitle"
          label="Title of transaction"
          type="text"
          handleChange={handleChange}
          errorMessage={formErrors.transactionTitle}
        />

        <Input
          value={formValues.amountInPLN}
          name="amountInPLN"
          label="Amount (in PLN)"
          type="text"
          handleChange={handleChange}
          errorMessage={formErrors.amountInPLN}
        />
      </Container>

      <ButtonWrapper>
        <Button type="submit">
          Add
        </Button>
      </ButtonWrapper>
    </StyledForm>
  );
};
