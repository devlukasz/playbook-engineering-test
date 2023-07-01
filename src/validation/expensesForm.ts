interface ExpensesRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
  };
}

export const expensesRules: ExpensesRules = {
  transactionTitle: {
    required: true,
    minLength: 5,
  },
  amountInPLN: {
    required: true,
  },
};