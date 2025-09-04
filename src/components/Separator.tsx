<hr style={{ width: '100%', border: 'none', borderTop: '1px solid #eee', margin: '24px 0' }} />;

import styled from 'styled-components';

const Separator = styled.div`
  width: 100%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export default Separator;
