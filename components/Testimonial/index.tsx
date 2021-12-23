import Image from 'next/image';
import {
  Body,
  Gallery,
  Item,
  Items,
  SectionTestimonial,
  TContainer,
  TestimonialHeader,
  Testimonials,
} from './Testimonial.styled';

const testimonials = [
  {
    quote:
      ' Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    img: '/Images/Avatars/avatar-1.png',
    name: 'Ben Hadley',
  },
  {
    quote:
      ' Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    img: '/Images/Avatars/avatar-5.png',
    name: 'Steve Miller',
  },
  {
    quote:
      ' Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    img: '/Images/Avatars/avatar-3.png',
    name: 'Hannah Smith',
  },
  {
    quote:
      ' Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    img: '/Images/Avatars/avatar-4.png',
    name: 'Dave Bryson',
  },
];

const images = [
  { img: '/Images/Gallery/gallery-1.jpeg' },
  { img: '/Images/Gallery/gallery-4.jpeg' },
  { img: '/Images/Gallery/gallery-3.jpeg' },
  { img: '/Images/Gallery/gallery-2.jpeg' },
];

const TestimonialSection = () => {
  return (
    <SectionTestimonial>
      <TContainer>
        <Body>
          <Testimonials>
            <TestimonialHeader>
              <span>How it works</span>
              <h2>Your daily dose of health in 3 simple steps</h2>
            </TestimonialHeader>

            <Items>
              {testimonials.map((x, index) => (
                <Item key={index}>
                  <>
                    <Image src={x.img} alt='avatar 1' height={60} width={60} />
                  </>
                  <blockquote className='text'>{x.quote}</blockquote>
                  <p className='name'>&mdash; {x.name}</p>
                </Item>
              ))}
            </Items>
          </Testimonials>
          <Gallery>
            {images.map((x, index) => (
              <figure key={index} className='image'>
                {/* <img src={x.img} alt={x.img} /> */}
                <Image src={x.img} alt={x.img} layout='fill' />
              </figure>
            ))}
          </Gallery>
        </Body>
      </TContainer>
    </SectionTestimonial>
  );
};

export default TestimonialSection;
