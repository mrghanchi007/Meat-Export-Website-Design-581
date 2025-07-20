import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';
import ProductsPreview from '../components/ProductsPreview';
import WhyChooseUs from '../components/WhyChooseUs';
import CertificationsBanner from '../components/CertificationsBanner';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      <WhyChooseUs />
      <CertificationsBanner />
      <ContactCTA />
    </div>
  );
};

export default Home;