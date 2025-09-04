import styled from 'styled-components';
import { STRINGS } from '@/constants';
import AmountInput from '@/components/AmountInput';
import { useContext, useState } from 'react';
import CurrencyInput from '@/components/CurrencyInput';
import { ExchangeRate } from '@/types';
import SubmitButton from '@/components/SubmitButton';
import convertCzkToCurrency from '@/utils/convertCzkToCurrency';
import Separator from '@/components/Separator';
import { AppContext } from '@/contexts/AppContext';

const ConverterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.xl};
  justify-content: center;
  padding: ${({ theme }) => theme.paddings.xl};
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  border-radius: ${({ theme }) => theme.paddings.medium};
  box-shadow: ${({ theme }) => theme.shadows.strong};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const Converter = () => {
  const { exchangeRates } = useContext(AppContext);
  const [amount, setAmount] = useState<number>();
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate>(exchangeRates[0]!);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const isConversionEnabled = !!amount && !!exchangeRate;
  const showResult = isConversionEnabled && !!convertedAmount;

  const convertAmount = (amount: number, exchangeRate: ExchangeRate) => {
    const convertedAmount = convertCzkToCurrency(amount, exchangeRate);
    setConvertedAmount(convertedAmount);
  };

  return (
    <ConverterContainer>
      <Title>{STRINGS.CONVERTER_TITLE}</Title>
      <AmountInput
        amount={amount}
        setAmount={(amount) => {
          setAmount(amount);
          setConvertedAmount(null);
        }}
      />
      <CurrencyInput
        setExchangeRate={(exchangeRate) => {
          setExchangeRate(exchangeRate);
          setConvertedAmount(null);
        }}
      />
      <SubmitButton
        disabled={!isConversionEnabled}
        onClick={() => isConversionEnabled && convertAmount(amount, exchangeRate)}
      />
      {showResult && (
        <>
          <Separator />
          {amount} CZK = {convertedAmount} {exchangeRate.currencyCode}
        </>
      )}
    </ConverterContainer>
  );
};

export default Converter;
