import { FBody } from 'components/Features/Features.styled';
import Image from 'next/image';
import Link from 'next/link';
import { FooterBody, FooterContainer, SFooter } from './Footer.styled';

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
              <Image
                src='/Images/Logo.svg'
                alt='Logo'
                width={170}
                height={38}
              />
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
            <h1>Form here</h1>
          </div>
        </FooterBody>
      </FooterContainer>
    </SFooter>
  );
};

export default Footer;
