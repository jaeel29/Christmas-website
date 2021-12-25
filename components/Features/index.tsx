import IconComp from 'components/IconComponent';
import { FBody, FContainer, Feature, SectionFeatures } from './Features.styled';

const features = [
  {
    title: 'Asset 1',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'christmas-christmas-1',
  },
  {
    title: 'Asset 2',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'christmas-christmas-2',
  },
  {
    title: 'Asset 3',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'christmas-christmas-3',
  },
  {
    title: 'Asset 4',
    description:
      'Our subscriptions cover 365 days per year, even including major holidays.',
    icon: 'christmas-christmas-4',
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
