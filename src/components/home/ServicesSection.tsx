import React from 'react';
import Section from '../ui/Section';
import PricingCard from '../ui/PricingCard';

const ServicesSection: React.FC = () => {
  const standardFeatures = [
    { text: '3-5 Vetted Candidates', included: true },
    { text: 'Detailed Profiles & Experience', included: true },
    { text: 'Availability Matching', included: true },
    { text: 'Initial Consultation', included: true },
    { text: 'Reference Calls', included: false },
    { text: 'Hiring Support', included: false },
    { text: 'Backup Nurse Guarantee', included: false },
  ];

  const premiumFeatures = [
    { text: '3-5 Vetted Candidates', included: true },
    { text: 'Detailed Profiles & Experience', included: true },
    { text: 'Availability Matching', included: true },
    { text: 'Initial Consultation', included: true },
    { text: 'Reference Calls', included: true },
    { text: 'Hiring Support', included: true },
    { text: 'Backup Nurse Guarantee', included: true },
  ];

  const customFeatures = [
    { text: 'Custom Number of Candidates', included: true },
    { text: 'Specialized Requirements', included: true },
    { text: 'Priority Matching', included: true },
    { text: 'Extended Support Period', included: true },
    { text: 'All Premium Features', included: true },
  ];

  return (
    <Section id="services" background="light">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose the Right Package for Your Family</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We offer flexible options to match your specific newborn care needs and budget.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <PricingCard
          title="Standard Placement"
          price="$1,000"
          description="Perfect for families who know what they're looking for and can manage the hiring process independently."
          features={standardFeatures}
          ctaText="Get Started"
        />
        
        <PricingCard
          title="Premium Placement"
          price="$1,500"
          description="Our most popular option with full support throughout the hiring process and additional guarantees."
          features={premiumFeatures}
          popular={true}
          ctaText="Select Premium"
        />
        
        <PricingCard
          title="Custom Solution"
          price="Custom"
          description="Tailored for families with specialized needs, multiples, or unique care requirements."
          features={customFeatures}
          ctaText="Contact Us"
          ctaHref="/contact"
        />
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          All packages include our personalized matching process and vetted candidates. <br />
          Background checks available for an additional $50 per candidate.
        </p>
      </div>
    </Section>
  );
};

export default ServicesSection;