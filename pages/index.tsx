import type { NextPage } from 'next';
import Head from 'next/head';
import HeroSection from '../components/Hero';
import { Title } from '../styles/Pages/Home.styled';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>amazfood</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div>
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
