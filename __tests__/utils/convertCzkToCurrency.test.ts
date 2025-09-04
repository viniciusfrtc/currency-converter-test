import convertCzkToCurrency from '../../src/utils/convertCzkToCurrency';
import { ExchangeRate } from '../../src/types';

describe('convertCzkToCurrency', () => {
  const mockExchangeRate: ExchangeRate = {
    country: 'United States',
    currencyCode: 'USD',
    rate: 22,
    amount: 1
  };

  it('should convert CZK to USD correctly', () => {
    const amount = 1000;
    const result = convertCzkToCurrency(amount, mockExchangeRate);
    expect(result).toBe("45.45");
  });

  it('should handle conversion with amount !== 1', () => {
    const amount = 1000;
    const mockExchangeRate: ExchangeRate = {
      country: 'Hungary',
      currencyCode: 'HUF',
      rate: 6.216,
      amount: 100
    };
    const result = convertCzkToCurrency(amount, mockExchangeRate);
    expect(result).toBe("16087.52");
  });
});
