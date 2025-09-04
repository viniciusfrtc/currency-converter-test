import styled from 'styled-components';
import { STRINGS } from '@/constants';

interface SubmitButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.paddings.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  transition: background 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    cursor: not-allowed;
  }
`;

const SubmitButton = ({ onClick, disabled }: SubmitButtonProps) => (
  <Button onClick={onClick} disabled={disabled}>
    {STRINGS.CONVERT}
  </Button>
);

export default SubmitButton;
