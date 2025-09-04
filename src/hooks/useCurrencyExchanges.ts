import { useSuspenseQuery } from '@tanstack/react-query';
import { HOUR_IN_MS, EXCHANGE_RATES_CACHE_KEY } from '@/constants';
import { ExchangeRate, CacheData, RatesData } from '@/types';

export default () => {
  const { data: exchangeRates } = useSuspenseQuery<ExchangeRate[]>({
    queryKey: ['daily-exchange-rates'],
    queryFn: async () => {
      const cache = localStorage.getItem(EXCHANGE_RATES_CACHE_KEY) as string;
      const cacheData = JSON.parse(cache) as CacheData;
      if (cacheData && cacheData.expires > Date.now()) {
        return cacheData.rates;
      }
      const res = await fetch(
        'https://cors-anywhere.com/https://api.cnb.cz/cnbapi/exrates/daily?lang=EN',
      );
      if (!res.ok) throw new Error('Failed to fetch CNB exchange rates');
      const parsedRes = (await res.json()) as RatesData;
      localStorage.setItem(
        EXCHANGE_RATES_CACHE_KEY,
        JSON.stringify({ rates: parsedRes.rates, expires: Date.now() + HOUR_IN_MS }),
      );
      return parsedRes.rates;
    },
    staleTime: HOUR_IN_MS,
  });

  return {
    exchangeRates,
  };
};
