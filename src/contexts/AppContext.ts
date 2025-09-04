import { createContext, useContext } from 'react';
import { AppContextType } from '@/types';

export const AppContext = createContext<AppContextType>({ exchangeRates: [] });

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
