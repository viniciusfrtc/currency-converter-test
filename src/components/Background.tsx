import styled from 'styled-components';

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export default Background;
