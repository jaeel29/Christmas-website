import Link from 'next/link';
import { Icons } from '../../assets/Icons/Icons-g/icons';
import IconComp from '../IconComponent';
import {
  Details,
  FTButton,
  LogoContainer,
  NavIcon,
  Navigation,
  Navlink,
  SHeader,
  SHeaderContainer,
  Socials,
  Wrapper,
} from './Header.styled';

const navigaton = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Products',
    url: '/products',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Sale',
    url: '/sale',
  },
  {
    title: 'Furniture Pros',
    url: '/pros',
  },
];

const socials = [
  {
    title: 'youtube',
    size: '16',
    url: 'https://www.youtube.com',
  },
  {
    title: 'twitter',
    size: '18',
    url: 'https://twitter.com',
  },
  {
    title: 'instagram',
    size: '16',
    url: 'https://www.instagram.com',
  },
];

const Header = () => {
  return (
    <SHeader>
      <SHeaderContainer>
        <LogoContainer>
          <Link href='/' passHref>
            <img className='logo' src='/Images/Logo.svg' alt='Logo' />
          </Link>
        </LogoContainer>

        <Wrapper>
          <Navigation>
            <ul>
              {navigaton.map((x, index) => (
                <Link href={x.url} key={index}>
                  <Navlink>{x.title}</Navlink>
                </Link>
              ))}
            </ul>
          </Navigation>

          <Details>
            <Socials>
              {socials.map((x, index) => (
                <NavIcon key={index}>
                  <IconComp name={x.title} sizeIcon={24} />
                </NavIcon>
              ))}
            </Socials>
          </Details>
          <Link href='/' passHref>
            <FTButton>Get free trial</FTButton>
          </Link>
        </Wrapper>
      </SHeaderContainer>
    </SHeader>
  );
};

export default Header;
