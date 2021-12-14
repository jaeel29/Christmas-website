import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '../PageLayout';
import { Hero, Left, Right, SectionHero } from './Hero.styled';

const HeroSection = () => {
  return (
    <PageLayout>
      <SectionHero>
        <Hero>
          <Left>
            <h1>A healthy meal delivered to your door, every single day</h1>

            <p>
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>

            <div className='links'>
              <Link href='/'>Start eating well</Link>
              <Link href='/'>Learn more</Link>
            </div>
          </Left>
          <Right>
            {/* <Image
              src='/img Demo/eating.jpg'
              alt='hero photo'
              width={800}
              height={1000}
            /> */}
            <img
              className='hero-img'
              src='/Images/Hero3.png'
              alt='eating a meal'
            />
          </Right>
        </Hero>
      </SectionHero>
    </PageLayout>
  );
};

export default HeroSection;
