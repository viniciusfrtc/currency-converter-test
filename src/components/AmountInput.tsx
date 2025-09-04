import styled from 'styled-components';
import React, { useState } from 'react';
import { STRINGS } from '@/constants';
import InputContainer from '@/components/InputContainer';
import InputTitle from '@/components/InputTitle';

const InputField = styled.input`
  padding: ${({ theme }) => theme.paddings.small};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.light};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

const isInputValid = (inputValue: string) => {
  const num = Number(inputValue);
  return (Number.isInteger(num) && num > 0) || inputValue === '';
};

interface CurrencyInputProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

const CurrencyInput = ({ value, onChange }: CurrencyInputProps) => {
  const [validationError, setValidationError] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (isInputValid(inputValue)) {
      onChange(Number(inputValue));
      setValidationError(false);
    } else {
      setValidationError(true);
    }
  };
  return (
    <InputContainer>
      <InputTitle>{STRINGS.AMOUNT_IN_CZK}</InputTitle>
      <InputField
        type="text"
        value={value || ''}
        onChange={handleInputChange}
        onBlur={() => setValidationError(false)}
      />
      {validationError && <ErrorMessage>{STRINGS.ONLY_NUMBERS_ALLOWED}</ErrorMessage>}
    </InputContainer>
  );
};

export default CurrencyInput;
