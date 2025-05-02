import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';
import FormSection from '../components/home/FormSection';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <FormSection />
      <CTASection />
    </Layout>
  );
};

export default Home;