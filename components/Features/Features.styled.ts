import styled from 'styled-components';
import { BorderBlue, Container } from 'styles/blocks';

export const SectionFeatures = styled.section`
  padding: 96px 0;
`;

export const FContainer = styled.div`
  ${Container}
`;

export const FBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;

  h1 {
    background-color: ${p => p.theme.colors.primaryLight2};
  }
`;

export const Feature = styled.div`
  .icon {
    width: 60px;
    height: 60px;
    background-color: ${p => p.theme.colors.primaryLight3};
    color: ${p => p.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-bottom: 16px;
    transition: all 0.2s ease-out;

    i {
      transition: all 0.5s ease-out;
    }

    &:hover {
      border-radius: 50%;

      i {
        transform: rotate(360deg);
      }
    }
  }

  .title {
    font-size: 2.4rem;
    margin-bottom: 16px;
    color: ${p => p.theme.colors.primaryDark4};
  }

  .description {
    font-size: 1.6rem;
    line-height: 1.5;
    color: ${p => p.theme.colors.primaryDark4};
  }
`;
