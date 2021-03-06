import Image from 'next/image';
import Link from 'next/link';
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
    icon: 'arrow-down',
    url: '/products',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Sales',
    url: '/sales',
  },
  {
    title: 'Things to do',
    url: '/thingstodo',
  },
];

const socials = [
  {
    title: 'sm-facebook',
    size: '16',
    url: 'https://www.facebook.com',
  },
  {
    title: 'sm-twitter',
    size: '18',
    url: 'https://twitter.com',
  },
  {
    title: 'sm-instagram',
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
            <div className='logo'>
              <Image src='/Images/Logo.svg' alt='Logo' width={76} height={68} />
            </div>
          </Link>
        </LogoContainer>

        <Wrapper>
          <Navigation>
            {navigaton.map((x, index) => (
              <Link passHref href={x.url} key={index}>
                <Navlink>
                  <h4>{x.title}</h4>
                  <IconComp name={x.icon} sizeIcon={24} />
                </Navlink>
              </Link>
            ))}
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
