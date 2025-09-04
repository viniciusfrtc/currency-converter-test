import styled from 'styled-components';
import InputContainer from '@/components/InputContainer';
import { STRINGS } from '@/constants';
import InputTitle from '@/components/InputTitle';
import { AppContext } from '@/contexts/AppContext';
import { useContext } from 'react';
import { ExchangeRate } from '@/types';

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.secondary};
`;

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
  value: ExchangeRate | undefined;
  onChange: (value: ExchangeRate) => void;
  label?: string;
}

const CurrencyInput = ({ value, onChange, label }: CurrencyInputProps) => {
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
      {label && <Label>{label}</Label>}
      <Select
        value={parseExchangeRateLabel(value || exchangeRates[0]!)}
        onChange={(e) => {
          onChange(exchangeRatesMap[e.target.value as ExchangeRate['currencyCode']]!);
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
