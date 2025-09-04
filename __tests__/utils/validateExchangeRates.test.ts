import isRatesDataValid from '../../src/utils/validateExchangeRates';
import { ExchangeRate } from '../../src/types';

describe('validateExchangeRates', () => {
  const validExchangeRate: ExchangeRate = {
    country: 'United States',
    currencyCode: 'USD',
    rate: 22,
    amount: 1
  };

  const validExchangeRate2: ExchangeRate = {
    country: 'Hungary',
    currencyCode: 'HUF',
    rate: 6.216,
    amount: 100
  };

  describe('with valid data', () => {
    it('should return true for a single valid exchange rate', () => {
      const ratesData: ExchangeRate[] = [validExchangeRate];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(true);
    });

    it('should return true for multiple valid exchange rates', () => {
      const ratesData: ExchangeRate[] = [validExchangeRate, validExchangeRate2];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(true);
    });

    it('should return false for empty array', () => {
      const ratesData: ExchangeRate[] = [];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });

    it('should return false for exchange rates with zero values', () => {
      const ratesData: ExchangeRate[] = [{
        country: 'Test',
        currencyCode: 'TEST',
        rate: 0,
        amount: 0
      }];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });
  });

  describe('with invalid data', () => {
    it('should return false when country is missing', () => {
      const ratesData: ExchangeRate[] = [{
        country: '',
        currencyCode: 'USD',
        rate: 22,
        amount: 1
      }];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });

    it('should return false when currencyCode is missing', () => {
      const ratesData: ExchangeRate[] = [{
        country: 'United States',
        currencyCode: '',
        rate: 22,
        amount: 1
      }];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });

    it('should return false when rate is missing', () => {
      const ratesData: ExchangeRate[] = [{
        country: 'United States',
        currencyCode: 'USD',
        rate: 0,
        amount: 1
      }];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });

    it('should return false when amount is missing', () => {
      const ratesData: ExchangeRate[] = [{
        country: 'United States',
        currencyCode: 'USD',
        rate: 22,
        amount: 0
      }];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });

    it('should return false when one rate is invalid in a mixed array', () => {
      const ratesData: ExchangeRate[] = [
        validExchangeRate,
        {
          country: '',
          currencyCode: 'EUR',
          rate: 25,
          amount: 1
        }
      ];
      const result = isRatesDataValid(ratesData);
      expect(result).toBe(false);
    });
  });
});