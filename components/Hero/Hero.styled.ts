import styled from 'styled-components';
import { BorderDebugging } from '../../styles/blocks/BorderDebugging';
import { Button } from '../../styles/blocks/Button';
import { Container } from '../../styles/blocks/Container';
import { Description } from '../../styles/blocks/Description';
import { Title } from '../../styles/blocks/Title';

export const SectionHero = styled.section`
  padding: 128px 0;
  /* background-color: ${p => p.theme.colors.primary}; */
`;

export const Hero = styled.div`
  ${Container}
  max-width: 1440px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 24px;
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

export const Links = styled.div`
  display: flex;
  align-items: center;
`;

export const SButton = styled.a`
  &:link,
  &:visited {
    /* ${BorderDebugging} */
    ${Button}
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;

    h4 {
      margin-right: 1rem;
    }

    &:not(:first-child) {
      margin: 0;
    }
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
    right: 40%;
    transform: translate(50%, -50%);
    width: 100%;
    border-radius: 10px;
    /* border: 3px solid blue; */
  }
`;

// export const SIcon = styled.i`
//   font-family: icons !important;
//   font-style: normal;
//   font-weight: normal !important;
//   font-variant: normal;
//   text-transform: none;
//   line-height: 1;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: white;
//   font-size: 35px;

//   /* &:before {
//     content: ${p => p.content};
//   } */
// `;
