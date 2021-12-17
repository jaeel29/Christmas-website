import styled from 'styled-components';
import {
  BorderBlue,
  BorderGreen,
  BorderOrange,
  BorderRed,
} from '../../styles/blocks/BorderDebugging';
import { Button } from '../../styles/blocks/Button';
import { Container } from '../../styles/blocks/Container';
import { Description } from '../../styles/blocks/Description';
import { Title } from '../../styles/blocks/Title';

export const SectionHero = styled.section`
  padding: 128px 0;
  /* background-color: ${p => p.theme.colors.primary}; */
`;

export const HeroContainer = styled.div`
  ${Container}
  max-width: 1440px;
  height: 50rem;
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 1fr);
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
`;

export const Left = styled.div`
  /* ${BorderOrange} */
  h1 {
    ${Title}
    margin-bottom: ${p => p.theme.spacing.s32};
  }

  & > p {
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
    ${Button}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;

    h4 {
      font-family: inherit;
    }

    &:not(:first-child) {
      margin-right: 0;
    }
  }
`;

export const Avatars = styled.div`
  margin-top: ${p => p.theme.spacing.s32};
  display: flex;
  align-items: center;
  gap: 1.6rem;

  .imgs {
    display: flex;

    /* img {
      width: 5rem;
      height: 5rem;
      margin-right: -1.5rem;
      border: 4px solid ${p => p.theme.colors.white};
      border-radius: 50%;
    } */
  }

  .paragraphAvatars {
    ${Description}

    span {
      color: ${p => p.theme.colors.primary};
      margin-right: 0.5rem;
    }
  }
`;

export const Img = styled.div`
  width: 5rem;
  height: 5rem;
  margin-right: -1.5rem;
  border: 4px solid ${p => p.theme.colors.white};
  border-radius: 50%;
  z-index: 1;

  &:last-child {
    margin-right: 0;
  }
`;

export const Right = styled.div`
  /* ${BorderOrange} */
  position: relative;
`;

export const HeroImg = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 120%;
  border-radius: 10px;
  z-index: 10;
  /* ${BorderOrange} */
`;

export const BG = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50rem;
  width: 50rem;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.primaryLight};
`;

export const Third = styled.div`
  height: 100%;
  grid-column: 2/-1;
  grid-row: 1/2;
  position: relative;

  div {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translate(-50%, 0);
    height: 50rem;
    width: 50rem;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.primaryLight};
  }
`;
