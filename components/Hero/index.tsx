import Link from 'next/link';
import { Icons } from '../../assets/Icons/Icons-g/icons';
import IconComp from '../IconComponent';
import PageLayout from '../PageLayout';
import { Hero, Left, Links, Right, SButton, SectionHero } from './Hero.styled';

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
                <SButton>
                  <h4>Explore</h4>
                </SButton>
              </Link>

              <Link href='/' passHref>
                <SButton light>
                  <h4>Learn more</h4>

                  <IconComp
                    name={Icons.ArrowDown}
                    sizeIcon={36}
                    color='red'
                  ></IconComp>
                </SButton>
              </Link>
            </Links>
          </Left>
          <Right>
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
