import type { NextPage } from 'next';
import Head from 'next/head';
import FeaturedSection from '../components/Featured';
import HeroSection from '../components/Hero';
import HowSection from '../components/How';
import PageLayout from '../components/PageLayout';
import { Title } from '../styles/Pages/Home.styled';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>amazfood</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <PageLayout>
        <HeroSection />
        <FeaturedSection />
        <HowSection />
      </PageLayout>
    </div>
  );
};

export default Home;
