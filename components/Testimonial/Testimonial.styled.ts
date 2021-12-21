import styled from 'styled-components';
import {
  BorderBlue,
  BorderOrange,
  Container,
  HeadingSecondary,
  Subheading,
} from 'styles/blocks';

export const SectionTestimonial = styled.section`
  /* padding: 96px 0 96px; */
  /* ${BorderOrange} */
  background-color: ${p => p.theme.colors.primaryLight3};
`;

export const TContainer = styled.div`
  ${Container}
  margin: 0;
  max-width: 100vw;
`;

export const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 55fr 45fr;
  align-items: center;
  column-gap: 48px;
`;

export const Testimonials = styled.div`
  padding: 72px 24px 72px 72px;
`;

export const TestimonialHeader = styled.div`
  /* padding: 20px 0; */

  span {
    ${Subheading}
    display: inline-block;
  }

  h2 {
    ${HeadingSecondary}
    margin-bottom: 36px;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Item = styled.figure`
  padding: 24px 24px 24px 0;
  border-radius: 10px;

  .text {
    font-size: 1.6rem;
    margin: 24px 0;
    line-height: 1.5;
    color: ${p => p.theme.colors.primaryDark4};
  }

  .name {
    font-size: 1.5rem;
    color: ${p => p.theme.colors.primary};
  }
`;

export const Gallery = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 400px);
  gap: 16px;

  .image {
    border-radius: 10px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
