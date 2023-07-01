import { ExpensesStore } from './expenseStore';

export class RootStore {
  expensesStore: ExpensesStore;

  constructor() {
    this.expensesStore = new ExpensesStore();
  }
}

export const rootStore = new RootStore();

