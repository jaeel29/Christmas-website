import FeaturesSection from 'components/Features';
import type { NextPage } from 'next';
import Head from 'next/head';
import ClientsSection from '../components/Clients';
import HeroSection from '../components/Hero';
import HowSection from '../components/How';
import PageLayout from '../components/PageLayout';
import ProductsSection from '../components/Products';
import TestimonialSection from '../components/Testimonial';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>amazfood</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <PageLayout>
        <HeroSection />
        <FeaturesSection />
        <HowSection />
        <ClientsSection />
        <ProductsSection />
        <TestimonialSection />
      </PageLayout>
    </div>
  );
};

export default Home;
