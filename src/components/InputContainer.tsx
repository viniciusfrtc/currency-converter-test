import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.small};
  width: 100%;
`;

export default InputContainer;
