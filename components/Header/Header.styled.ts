import styled from 'styled-components';
import { Container } from '../../styles/blocks/Container';

export const SHeader = styled.header`
  height: 8rem;
  background-color: ${p => p.theme.colors.primaryLight};
  padding: 2.4rem 0;
  border-bottom: 3px solid ${p => p.theme.colors.primaryLight2};
`;

export const SHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 80px;
  font-size: 1.5rem;
  ${Container}
`;
