import Converter from '@/pages/Converter';
import useCurrencyExchanges from '@/hooks/useCurrencyExchanges';
import { AppContext } from '@/contexts/AppContext';

const App = () => {
  const { exchangeRates } = useCurrencyExchanges();

  return (
    <AppContext.Provider value={{ exchangeRates }}>
      <Converter />
    </AppContext.Provider>
  );
};

export default App;
