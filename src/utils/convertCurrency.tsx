export const convertCurrency = (initialValue: number, exchangeRate: number): number => Number((initialValue / exchangeRate).toFixed(2));
