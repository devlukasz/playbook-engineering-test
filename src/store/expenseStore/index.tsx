import { makeAutoObservable, reaction } from "mobx";
import { v4 as uuidv4 } from "uuid";
import { convertCurrency } from "../../utils/convertCurrency";

export interface ExpenseModel {
  id: string;
  title: string;
  plnAmount: number;
  eurAmount: number;
}

export class ExpensesStore {
  conversionRate = 4.382;
  expenseList: ExpenseModel[] = [];

  constructor() {
    makeAutoObservable(this);

    reaction(() => this.conversionRate, this.updateExpenseEurAmounts);
  }

  changeConversionRate(newCurrencyRate: number) {
    this.conversionRate = newCurrencyRate;
  }

  addExpense(title: string, plnAmount: number) {
    this.expenseList.push({
      id: uuidv4(),
      title,
      plnAmount,
      eurAmount: convertCurrency(plnAmount, this.conversionRate),
    });
  }

  removeExpense(id: string) {
    this.expenseList = this.expenseList.filter((expense) => expense.id !== id);
  }

  get expenseSum() {
    const { plnAmount, eurAmount } = this.expenseList.reduce(
      (sum, expense) => ({
        plnAmount: Number((sum.plnAmount + expense.plnAmount).toFixed(2)),
        eurAmount: Number((sum.eurAmount + expense.eurAmount).toFixed(2)),
      }),
      { plnAmount: 0, eurAmount: 0 }
    );

    return { plnAmount, eurAmount };
  }

  private updateExpenseEurAmounts = () => {
    this.expenseList = this.expenseList.map((expense) => ({
      ...expense,
      eurAmount: convertCurrency(expense.plnAmount, this.conversionRate),
    }));
  };
}
