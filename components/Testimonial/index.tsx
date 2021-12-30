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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas at laudantium beatae ducimus facilis assumenda veritatis.',
    img: '/Images/Avatars/avatar-1.png',
    name: 'Ben Hadley',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas at laudantium beatae ducimus facilis assumenda veritatis.',
    img: '/Images/Avatars/avatar-5.png',
    name: 'Steve Miller',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas at laudantium beatae ducimus facilis assumenda veritatis.',
    img: '/Images/Avatars/avatar-3.png',
    name: 'Hannah Smith',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas at laudantium beatae ducimus facilis assumenda veritatis.',
    img: '/Images/Avatars/avatar-4.png',
    name: 'Dave Bryson',
  },
];

const images = [
  { img: '/Images/Gallery/gallery-1.png' },
  { img: '/Images/Gallery/gallery-4.png' },
  { img: '/Images/Gallery/gallery-3.png' },
  { img: '/Images/Gallery/gallery-2.png' },
];

const TestimonialSection = () => {
  return (
    <SectionTestimonial>
      <TContainer>
        <Body>
          <Testimonials>
            <TestimonialHeader>
              <span>Testimonials</span>
              <h2>Lorem, ipsum dolor sit amet consectetur elit.</h2>
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
                <Image priority src={x.img} alt={x.img} layout='fill' />
              </figure>
            ))}
          </Gallery>
        </Body>
      </TContainer>
    </SectionTestimonial>
  );
};

export default TestimonialSection;
