import styled from 'styled-components';
import {
  BorderBlue,
  BorderGreen,
  BorderOrange,
} from '../../styles/blocks/BorderDebugging';
import { Container } from '../../styles/blocks/Container';
import { HeadingSecondary, Subheading } from '../../styles/blocks/Titles';

export const SectionProducts = styled.section`
  padding: 96px 0;
  height: 1000px;
`;

export const PContainer = styled.div`
  ${Container}
  height: 300px;
`;

export const Header = styled.div`
  padding: 20px 0;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 64px;

  .list {
    ${BorderOrange}
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
    }
  }
`;

export const Card = styled.div`
  /* ${BorderOrange} */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 40px 64px -12px rgba(31, 41, 51, 0.05),
    0px 0px 14px -4px rgba(31, 41, 51, 0.05),
    0px 30px 48px -8px rgba(31, 41, 51, 0.05);
  transition: all 0.4s ease-out;

  &:hover {
    transform: translateY(-20px);
  }

  .card-image {
    background-color: ${p => p.theme.colors.primaryLight3};
    margin-bottom: 2.4rem;
  }

  .card-body {
    padding: 3rem;
    .tag {
      display: inline-block;
      color: red;
      font-size: 1.6rem;
      font-family: 'E-B';
      background-color: ${p => p.theme.colors.primaryLight};
      color: ${p => p.theme.colors.primaryDark4};
      border-radius: 20px;
      padding: 12px 24px;
    }

    .title {
      font-size: 2.4rem;
      font-family: 'E-B';
      margin: 2.4rem 0;
    }

    .list-item {
      .item {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;

        p {
          margin-left: 1rem;
          font-size: 1.4rem;
          font-family: 'E-M';
        }
      }
    }
  }
`;

export const List = styled.div``;
