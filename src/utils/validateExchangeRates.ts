import { ExchangeRate } from '@/types';

const isRatesDataValid = (ratesData: ExchangeRate[]): ratesData is ExchangeRate[] => {
  return (
    ratesData.length > 0 &&
    ratesData.every((rate) => rate.country && rate.currencyCode && rate.rate && rate.amount)
  );
};

export default isRatesDataValid;
