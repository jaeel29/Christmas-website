import styled from 'styled-components';
import { Container } from '../../styles/blocks/Container';
import { Description } from '../../styles/blocks/Description';
import { Title } from '../../styles/blocks/Title';

export const SectionHero = styled.section`
  padding: ${p => p.theme.spacing.s32} 0;
  background-color: ${p => p.theme.colors.p4Light};
`;

export const Hero = styled.div`
  ${Container}
  max-width: 1440px;
  display: flex;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: ${p => p.theme.spacing.s32};
`;

export const Left = styled.div`
  /* border: 3px solid red; */

  h1 {
    ${Title}
    margin-bottom: ${p => p.theme.spacing.s32};
  }

  p {
    ${Description}
    margin-bottom: ${p => p.theme.spacing.s32};
  }
`;

export const Right = styled.div`
  .hero-img {
    width: 100%;
  }
`;
