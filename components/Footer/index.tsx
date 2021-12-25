import { FBody } from 'components/Features/Features.styled';
import Image from 'next/image';
import Link from 'next/link';
import {
  FooterBody,
  FooterContainer,
  FTButton,
  SFooter,
} from './Footer.styled';

const items = [
  {
    title: 'Stays',
    url: '/',
  },
  {
    title: 'Flights',
    url: '/flights',
  },
  {
    title: 'Support',
    url: '/support',
  },
  {
    title: 'Cars',
    url: '/cars',
  },
  {
    title: 'Things to do',
    url: '/things-to-do',
  },
];

const Footer = () => {
  return (
    <SFooter>
      <FooterContainer>
        <FooterBody>
          <Link href='/' passHref>
            <div className='logo'>
              <Image src='/Images/Logo.svg' alt='Logo' width={76} height={68} />
            </div>
          </Link>
          <div className='menu'>
            {items.map((x, index) => (
              <Link href={x.url} key={index} passHref>
                <h1>{x.title}</h1>
              </Link>
            ))}
          </div>
          <div className='form'>
            <Link href='/' passHref>
              <FTButton>Get free trial</FTButton>
            </Link>
          </div>
        </FooterBody>
      </FooterContainer>
    </SFooter>
  );
};

export default Footer;
