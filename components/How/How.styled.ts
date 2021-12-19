import styled from 'styled-components';
import { BorderBlue, BorderOrange } from '../../styles/blocks/BorderDebugging';
import { Container } from '../../styles/blocks/Container';
import { GridTwoColumns } from '../../styles/blocks/Grid';
import {
  HeadingSecondary,
  HeadingTertiary,
  NumberText,
  Subheading,
} from '../../styles/blocks/Titles';

export const SectionHow = styled.section`
  padding: 96px 0;
`;

export const HowContainer = styled.div`
  ${Container}
`;

export const HowHeader = styled.div`
  padding: 20px 0;
  /* ${BorderOrange} */

  span {
    ${Subheading}
    display: inline-block;
  }

  h2 {
    ${HeadingSecondary}
  }
`;

export const Body = styled.div`
  /* ${BorderOrange} */
  ${Container}
  padding: 20px 0;
`;

export const Card = styled.div`
  ${GridTwoColumns}
  align-items: center;
  margin: 20px 0;
  padding: 40px;
  border-radius: 10px;
  /* display: flex; */

  &:nth-child(2) {
    background-color: ${p => p.theme.colors.primaryLight3};

    .step-number {
      ${NumberText}
      color: #cdedd8;
    }
  }
`;

export const Text = styled.div`
  .step-number {
    ${NumberText}
  }

  .heading-tertiary {
    ${HeadingTertiary}
  }

  .step-description {
    font-size: 1.6rem;
    line-height: 1.6;
    color: ${p => p.theme.colors.primaryDark2};
  }
`;

export const Img = styled.div`
  /* ${BorderOrange} */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    display: block;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }

  &::before {
    content: '';
    width: 40rem;
    padding-bottom: 40rem;
    /* height: 30rem; */
    background-color: #eef9f2;
  }

  &::after {
    content: '';
    width: 27rem;
    padding-bottom: 27rem;
    /* height: 30rem; */
    background-color: #def3e5;
  }

  &:nth-child(2) {
    &::before {
      background-color: #def3e5;
    }

    &::after {
      content: '';
      background-color: #cdedd8;
    }
  }
`;
