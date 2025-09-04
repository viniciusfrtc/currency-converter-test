import { Theme } from '@/types';

export const HOUR_IN_MS = 1000 * 60 * 60;

export const EXCHANGE_RATES_CACHE_KEY = 'dailyExchangeRates';

export const THEME: Theme = {
  colors: {
    primary: '#3498db',
    primaryHover: '#09619c',
    secondary: '#868687',
    background: '#f2f4f7',
    whiteBackground: '#fff',
    text: '#333',
    error: '#ea1c1c',
  },
  paddings: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xl: '32px',
  },
  gaps: {
    small: '4px',
    medium: '8px',
    large: '16px',
    xl: '24px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
  },
  shadows: {
    light: '0 2px 8px rgba(0, 0, 0, 0.04)',
    strong: '0 4px 16px rgba(0, 0, 0, 0.08)',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
    xl: '32px',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export const STRINGS = {
  CONVERTER_TITLE: 'Currency Converter',
  AMOUNT_IN_CZK: 'Insert amount in CZK:',
  ONLY_NUMBERS_ALLOWED: 'Only numbers are allowed',
  SELECT_CURRENCY: 'Select currency:',
  CONVERT: 'Convert',
};
