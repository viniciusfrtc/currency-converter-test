import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import useCurrencyExchanges from '../../src/hooks/useCurrencyExchanges';
import { ExchangeRate, CacheData } from '../../src/types';
import { EXCHANGE_RATES_CACHE_KEY, HOUR_IN_MS } from '../../src/constants';
import React from 'react';

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

// Mock fetch
const mockFetch = global.fetch as jest.Mock;

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Wrapper component for React Query
const createWrapper = () => {
  const queryClient = new QueryClient();
  
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe('useCurrencyExchanges', () => {
  const mockExchangeRates: ExchangeRate[] = [
    {
      country: 'United States',
      currencyCode: 'USD',
      rate: 22,
      amount: 1
    },
    {
      country: 'Euro',
      currencyCode: 'EUR',
      rate: 25,
      amount: 1
    }
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockClear();
    mockLocalStorage.setItem.mockClear();
  });

  it('should fetch exchange rates from API when cache is empty', async () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ rates: mockExchangeRates })
    } as Response);

    const { result } = renderHook(() => useCurrencyExchanges(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.exchangeRates).toEqual(mockExchangeRates);
    });

    expect(mockFetch).toHaveBeenCalledWith(
      'https://cors-anywhere.com/https://api.cnb.cz/cnbapi/exrates/daily?lang=EN'
    );
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith(
      EXCHANGE_RATES_CACHE_KEY,
      expect.stringContaining('"rates":')
    );
  });

  it('should return cached data when cache is valid', async () => {
    const cacheData: CacheData = {
      rates: mockExchangeRates,
      expires: Date.now() + HOUR_IN_MS
    };
    
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(cacheData));

    const { result } = renderHook(() => useCurrencyExchanges(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.exchangeRates).toEqual(mockExchangeRates);
    });

    expect(mockFetch).not.toHaveBeenCalled();
    expect(mockLocalStorage.setItem).not.toHaveBeenCalled();
  });

  it('should fetch new data when cache is expired', async () => {
    const expiredCacheData: CacheData = {
      rates: mockExchangeRates,
      expires: 1
    };
    
    mockLocalStorage.getItem.mockReturnValue(JSON.stringify(expiredCacheData));
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ rates: mockExchangeRates })
    } as Response);

    const { result } = renderHook(() => useCurrencyExchanges(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.exchangeRates).toEqual(mockExchangeRates);
    });

    expect(mockFetch).toHaveBeenCalled();
    expect(mockLocalStorage.setItem).toHaveBeenCalled();
  });
});
