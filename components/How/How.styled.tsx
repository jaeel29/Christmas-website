import styled from 'styled-components';
import {
  BorderBlue,
  BorderOrange,
  BorderRed,
} from '../../styles/blocks/BorderDebugging';
import { Container } from '../../styles/blocks/Container';
import { GridTwoColumns } from '../../styles/blocks/Grid';
import { HeadingSecondary, Subheading } from '../../styles/blocks/Titles';

export const SectionHow = styled.section``;

export const HowContainer = styled.div`
  ${Container}
  ${BorderOrange}
`;

export const HowHeader = styled.div`
  padding: 20px 0;

  span {
    ${Subheading}
  }
`;

export const Body = styled.div`
  ${Container}
  padding: 20px 0;
`;

export const Card = styled.div`
  ${GridTwoColumns}
  margin: 20px 0;
`;

export const Text = styled.div`
  .heading-secondary {
    ${HeadingSecondary}
    margin-bottom: 16px;
  }
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
