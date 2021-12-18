import Image from 'next/image';
import {
  FeaturedContainer,
  Logos,
  SectionFeatured,
  Title,
} from './Clients.styled';

const listClients = [
  { title: 'rotashow', url: '/Images/Clients/rotashow.png' },
  { title: 'travelers', url: '/Images/Clients/travelers.png' },
  { title: 'velocity9', url: '/Images/Clients/velocity9.png' },
  { title: 'waves', url: '/Images/Clients/waves.png' },
  { title: 'goldlines', url: '/Images/Clients/goldlines.png' },
];

const ClientsSection = () => {
  return (
    <SectionFeatured>
      <FeaturedContainer>
        <Title>As Featured In</Title>

        <Logos>
          {listClients.map((x, index) => (
            <div key={index}>
              <Image src={x.url} alt={x.title} width={166} height={64} />
            </div>
          ))}
        </Logos>
      </FeaturedContainer>
    </SectionFeatured>
  );
};

export default ClientsSection;
