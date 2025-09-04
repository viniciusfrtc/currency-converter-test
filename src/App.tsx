import Converter from '@/pages/Converter';
import useCurrencyExchanges from '@/hooks/useCurrencyExchanges';
import { AppContext } from '@/contexts/AppContext';
import styled from 'styled-components';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const { exchangeRates } = useCurrencyExchanges();

  return (
    <AppContext.Provider value={{ exchangeRates }}>
      <Background>
        <Converter />
      </Background>
    </AppContext.Provider>
  );
};

export default App;
