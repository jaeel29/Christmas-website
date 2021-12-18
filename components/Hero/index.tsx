import Image from 'next/image';
import Link from 'next/link';
import {
  Avatars,
  BG,
  HeroContainer,
  HeroImg,
  Img,
  Left,
  Links,
  Right,
  SButton,
  SectionHero,
  Third,
} from './Hero.styled';

const HeroSection = () => {
  return (
    <SectionHero>
      <HeroContainer>
        <Left>
          <h1>A healthy meal delivered to your door, every single day</h1>

          <p>
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
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
              <Img>
                <Image
                  src='/Images/Avatars/avatar-1.png'
                  alt='avatar 1'
                  width={100}
                  height={100}
                />
              </Img>
              <Img>
                <Image
                  src='/Images/Avatars/avatar-2.png'
                  alt='avatar 2'
                  width={100}
                  height={100}
                />
              </Img>
              <Img>
                <Image
                  src='/Images/Avatars/avatar-3.png'
                  alt='avatar 3'
                  width={100}
                  height={100}
                />
              </Img>
              <Img>
                <Image
                  src='/Images/Avatars/avatar-4.png'
                  alt='avatar 4'
                  width={100}
                  height={100}
                />
              </Img>
              <Img>
                <Image
                  src='/Images/Avatars/avatar-5.png'
                  alt='avatar 5'
                  width={100}
                  height={100}
                />
              </Img>
              <Img>
                <Image
                  src='/Images/Avatars/avatar-6.png'
                  alt='avatar 6'
                  width={100}
                  height={100}
                />
              </Img>
            </div>

            <p className='paragraphAvatars'>
              <span>365 days</span> food subscription.
            </p>
          </Avatars>
        </Left>
        <Right>
          <HeroImg>
            <Image
              src='/Images/Santa.png'
              alt='eating a meal'
              width={800}
              height={800}
            />
          </HeroImg>

          <BG></BG>
        </Right>
        {/* <Third>
          </Third> */}
      </HeroContainer>
    </SectionHero>
  );
};

export default HeroSection;
