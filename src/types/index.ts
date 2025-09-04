export type ExchangeRate = {
  country: string;
  currencyCode: string;
  rate: number;
};

export type RatesData = { rates: ExchangeRate[] };

export interface CacheData extends RatesData {
  expires: number;
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    whiteBackground: string;
    text: string;
    error: string;
  };
  gaps: {
    small: string;
    medium: string;
    large: string;
    xl: string;
  };
  paddings: {
    small: string;
    medium: string;
    large: string;
    xl: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  shadows: {
    light: string;
    strong: string;
  };
  fontSizes: {
    small: string;
    medium: string;
    large: string;
    xl: string;
  };
  fontWeights: {
    normal: string;
    bold: string;
  };
}

export interface AppContextType {
  exchangeRates: ExchangeRate[];
}
