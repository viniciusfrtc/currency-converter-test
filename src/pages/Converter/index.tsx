import styled from 'styled-components';
import { STRINGS } from '@/constants';
import AmountInput from '@/components/AmountInput';
import { useState } from 'react';
import CurrencyInput from '@/components/CurrencyInput';
import { ExchangeRate } from '@/types';

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
  const [value, setValue] = useState<number>();
  const [currencyToConvert, setCurrencyToConvert] = useState<ExchangeRate | undefined>();
  return (
    <ConverterContainer>
      <Title>{STRINGS.CONVERTER_TITLE}</Title>
      <AmountInput value={value} onChange={setValue} />
      <CurrencyInput value={currencyToConvert} onChange={setCurrencyToConvert} />
    </ConverterContainer>
  );
};

export default Converter;
