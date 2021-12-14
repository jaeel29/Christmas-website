import styled from 'styled-components';
import { BorderDebugging } from '../../styles/blocks/BorderDebugging';
import { Container } from '../../styles/blocks/Container';
import { Description } from '../../styles/blocks/Description';
import { Title } from '../../styles/blocks/Title';

export const SectionHero = styled.section`
  padding: 128px 0;
  /* background-color: ${p => p.theme.colors.p4Light}; */
`;

export const Hero = styled.div`
  ${Container}
  max-width: 1440px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 32px;
`;

export const Left = styled.div`
  /* ${BorderDebugging} */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
  /* ${BorderDebugging} */
  position: relative;
  /* max-width: 600px; */
  width: 100%;
  height: 40rem;

  .hero-img {
    position: absolute;
    top: 50%;
    right: 30%;
    transform: translate(50%, -50%);
    width: 100%;
    border-radius: 10px;
    /* border: 3px solid blue; */
  }
`;
