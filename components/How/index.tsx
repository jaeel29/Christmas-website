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
          <h2>Your daily dose of health in 3 simple steps</h2>
        </HowHeader>

        <Body>
          <Card>
            <Img>
              <Image
                src='/Images/Christmas/Christmas-Tree.png'
                alt='chrismas'
                width={500}
                height={500}
              />
            </Img>
            <Text>
              <p>01</p>
              <h3 className='heading-secondary'>
                Tell us what you like (and what not)
              </h3>
              <p>
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </Text>
          </Card>
          <Card>
            <Text>
              <p>02</p>
              <h3 className='heading-secondary'>
                Approve your weekly meal plan
              </h3>
              <p>
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </Text>
            <Img>
              <Image
                src='/Images/Christmas/Rudolph.png'
                alt='chrismas'
                width={500}
                height={500}
              />
            </Img>
          </Card>
          <Card>
            <Img>
              <Image
                src='/Images/Christmas/Snowman.png'
                alt='chrismas'
                width={500}
                height={500}
              />
            </Img>
            <Text>
              <p>03</p>
              <h3 className='heading-secondary'>
                Receive meals at convenient time
              </h3>
              <p>
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </Text>
          </Card>
        </Body>
      </HowContainer>
    </SectionHow>
  );
};

export default HowSection;
