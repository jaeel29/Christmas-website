import styled from 'styled-components';
import {
  BorderBlue,
  BorderGreen,
  BorderOrange,
  BorderRed,
} from '../../styles/blocks/BorderDebugging';
import { Container } from '../../styles/blocks/Container';
import { HeadingSecondary, Subheading } from '../../styles/blocks/Titles';

export const SectionProducts = styled.section`
  padding: 96px 0;
  height: 1000px;
`;

export const PContainer = styled.div`
  ${Container}
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
    /* ${BorderOrange} */
    border-radius: 15px;
    padding: 24px;

    h2 {
      ${HeadingSecondary}
      margin-bottom: 32px;
      font-size: 32px;
      letter-spacing: -0.5px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;

      li {
        display: flex;
        align-items: center;
        gap: 12px;

        span {
          font-size: 1.8rem;
        }
      }
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
  }

  .card-body {
    padding: 3rem;
    .tag {
      display: inline-block;
      color: red;
      font-size: 1.6rem;
      font-family: 'E-B';
      border-radius: 4px;
      padding: 8px 16px;
      background-color: #e9faf7;
      color: #20c9ac;
      text-transform: uppercase;
    }

    .title {
      font-size: 2.4rem;
      font-family: 'E-B';
      margin: 2.4rem 0;
    }

    .list-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .item {
        display: flex;
        align-items: center;

        span {
          margin-left: 1rem;
          font-size: 1.4rem;
          font-family: 'E-M';
        }
      }
    }
  }
  &:nth-child(2) {
    .tag {
      background-color: #fff2f0;
      color: #ff6a55;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 56px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 16px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s ease-out;

    span {
      color: ${p => p.theme.colors.primaryDark4};
      font-size: 1.8rem;
      letter-spacing: -0.5px;
    }

    &:hover,
    &:active {
      background-color: ${p => p.theme.colors.primaryLight};
    }
  }
`;
