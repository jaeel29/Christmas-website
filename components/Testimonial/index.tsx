import {
  Body,
  Gallery,
  SectionTestimonial,
  TContainer,
  Testimonials,
} from './Testimonial.styled';

const TestimonialSection = () => {
  return (
    <SectionTestimonial>
      <TContainer>
        <Body>
          <Testimonials>
            <h1>Testimonials</h1>
          </Testimonials>
          <Gallery>
            <h1>Gallery</h1>
          </Gallery>
        </Body>
      </TContainer>
    </SectionTestimonial>
  );
};

export default TestimonialSection;
