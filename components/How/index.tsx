import Image from 'next/image';
import {
  Body,
  Card,
  HowContainer,
  HowHeader,
  Img,
  SectionHow,
  Text,
} from './How.styled';

const HowSection = () => {
  return (
    <SectionHow>
      <HowContainer>
        <HowHeader>
          <span>How it works</span>
          <h2>How to create your santa character</h2>
        </HowHeader>

        <Body>
          <Card>
            <Img>
              <Image
                src='/Images/Christmas/Penguin.png'
                alt='christmas tree'
                width={500}
                height={500}
              />
            </Img>
            <Text>
              <p className='step-number'>01</p>
              <h3 className='heading-tertiary'>Step number one</h3>
              <p className='step-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                veritatis ad ab culpa omnis, alias fugit repellat, sint magnam
                enim sed recusandae expedita dolore labore laborum mollitia
                velit perferendis vel.
              </p>
            </Text>
          </Card>
          <Card>
            <Text>
              <p className='step-number'>02</p>
              <h3 className='heading-tertiary'>Step number two</h3>
              <p className='step-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                veritatis ad ab culpa omnis.
              </p>
            </Text>
            <Img>
              <Image
                src='/Images/Christmas/Rudolph.png'
                alt='rudolph'
                width={500}
                height={500}
              />
            </Img>
          </Card>
          <Card>
            <Img>
              <Image
                src='/Images/Christmas/Snowman.png'
                alt='snowman'
                width={500}
                height={500}
              />
            </Img>
            <Text>
              <p className='step-number'>03</p>
              <h3 className='heading-tertiary'>Step number three</h3>
              <p className='step-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                veritatis ad ab culpa omnis, alias fugit repellat, sint magnam
                enim sed recusandae expedita.
              </p>
            </Text>
          </Card>
        </Body>
      </HowContainer>
    </SectionHow>
  );
};

export default HowSection;
