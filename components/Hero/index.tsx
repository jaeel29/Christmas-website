import Link from 'next/link';
import { Icons } from '../../assets/Icons/Icons-g/icons';
import IconComp from '../IconComponent';
import PageLayout from '../PageLayout';
import {
  Avatars,
  Hero,
  Left,
  Links,
  Right,
  SButton,
  SectionHero,
  Third,
} from './Hero.styled';

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

            <Links>
              <Link href='/' passHref>
                <SButton>Explore</SButton>
              </Link>

              <Link href='/' passHref>
                <SButton light>
                  <h4>Book a drive</h4>

                  {/* <IconComp name={Icons.ArrowRight} sizeIcon={36}></IconComp> */}
                </SButton>
              </Link>
            </Links>

            <Avatars>
              <div className='imgs'>
                <img src='/Images/Avatars/avatar-1.png' alt='avatar 1' />
                <img src='/Images/Avatars/avatar-6.png' alt='avatar 6' />
                <img src='/Images/Avatars/avatar-2.png' alt='avatar 2' />
                <img src='/Images/Avatars/avatar-3.png' alt='avatar 3' />
                <img src='/Images/Avatars/avatar-4.png' alt='avatar 4' />
                <img src='/Images/Avatars/avatar-5.png' alt='avatar 5' />
              </div>

              <p className='paragraphAvatars'>
                <span>365 days</span> food subscription.
              </p>
            </Avatars>
          </Left>
          <Right>
            <img
              className='hero-img'
              src='/Images/Santa.png'
              alt='eating a meal'
            />
            <div></div>
          </Right>
          {/* <Third>
          </Third> */}
        </Hero>
      </SectionHero>
    </PageLayout>
  );
};

export default HeroSection;
