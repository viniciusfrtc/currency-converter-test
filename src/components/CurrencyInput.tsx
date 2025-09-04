import styled from 'styled-components';
import InputContainer from '@/components/InputContainer';
import { STRINGS } from '@/constants';
import InputTitle from '@/components/InputTitle';
import { AppContext } from '@/contexts/AppContext';
import { useContext } from 'react';
import { ExchangeRate } from '@/types';

const Select = styled.select`
  padding: ${({ theme }) => theme.paddings.small};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background: ${({ theme }) => theme.colors.whiteBackground};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &:focus,
  &:active {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.light};
  }
`;

const parseExchangeRateLabel = (exchangeRate: ExchangeRate) => {
  return `${exchangeRate.country} (${exchangeRate.currencyCode})`;
};

interface CurrencyInputProps {
  setExchangeRate: (value: ExchangeRate) => void;
}

const CurrencyInput = ({ setExchangeRate }: CurrencyInputProps) => {
  const { exchangeRates } = useContext(AppContext);
  const exchangeRatesMap = exchangeRates.reduce(
    (acc, exchangeRate) => {
      acc[exchangeRate.currencyCode] = exchangeRate;
      return acc;
    },
    {} as Record<ExchangeRate['currencyCode'], ExchangeRate>,
  );
  return (
    <InputContainer>
      <InputTitle>{STRINGS.SELECT_CURRENCY}</InputTitle>
      <Select
        defaultValue={parseExchangeRateLabel(exchangeRates[0]!)}
        onChange={(e) => {
          setExchangeRate(exchangeRatesMap[e.target.value as ExchangeRate['currencyCode']]!);
          e.target.blur();
        }}
      >
        {exchangeRates.map((exchangeRate) => (
          <option key={exchangeRate.currencyCode} value={exchangeRate.currencyCode}>
            {parseExchangeRateLabel(exchangeRate)}
          </option>
        ))}
      </Select>
    </InputContainer>
  );
};

export default CurrencyInput;
