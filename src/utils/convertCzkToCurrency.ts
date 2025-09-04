import { ExchangeRate } from '@/types';

const convertCzkToCurrency = (amount: number, exchangeRate: ExchangeRate) => {
  return ((amount / exchangeRate.rate) * exchangeRate.amount).toFixed(2);
};

export default convertCzkToCurrency;
