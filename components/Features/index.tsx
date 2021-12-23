import IconComp from 'components/IconComponent';
import { FBody, FContainer, Feature, SectionFeatures } from './Features.styled';

const features = [
  {
    title: 'Never cook again!',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'arrow-down',
  },
  {
    title: 'Local and organic',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'arrow-down',
  },
  {
    title: 'No waste',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'arrow-down',
  },
  {
    title: 'Pause anytime',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'arrow-down',
  },
];

const FeaturesSection = () => {
  return (
    <SectionFeatures>
      <FContainer>
        <FBody>
          {features.map((x, index) => (
            <Feature key={index}>
              <div className='icon'>
                <IconComp name={x.icon} sizeIcon={36} />
              </div>
              <h3 className='title'>{x.title}</h3>
              <p className='description'>{x.description}</p>
            </Feature>
          ))}
        </FBody>
      </FContainer>
    </SectionFeatures>
  );
};

export default FeaturesSection;
