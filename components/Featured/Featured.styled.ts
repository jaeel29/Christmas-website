import styled from 'styled-components';
import { Container } from '../../styles/blocks/Container';

export const SectionFeatured = styled.section`
  padding: 96px 0;
`;

export const FeaturedContainer = styled.div`
  ${Container}
  background-color: ${p => p.theme.colors.primaryLight};
  padding: 40px;
  border-radius: 10px;
  height: 200px;
`;
