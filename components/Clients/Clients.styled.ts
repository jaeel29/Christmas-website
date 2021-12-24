import styled from 'styled-components';
import {
  BorderBlue,
  BorderGreen,
  BorderOrange,
  Container,
} from 'styles/blocks';

export const SectionFeatured = styled.section`
  padding: 0 0 96px 0 0;
`;

export const FeaturedContainer = styled.div`
  ${Container}
  background-color: ${p => p.theme.colors.primaryLight};
  padding: 30px 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* ${BorderBlue} */
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 2.4rem;
  color: ${p => p.theme.colors.primaryDark};
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const Logos = styled.div`
  /* ${BorderOrange} */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    /* ${BorderGreen} */
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
