import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const FormSection: React.FC = () => {
  return (
    <Section id="apply" background="purple">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Apply Now</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started With Your Match</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Take the first step towards peaceful nights and expert newborn care for your family.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ready to Find Your Perfect Night Nurse?</h3>
        <p className="text-gray-600 mb-8">
          Click below to start your application. Our team will review your submission and be in touch within 24 hours to begin your matching process.
        </p>
        <Button href="/apply" size="lg">
          Start Your Application
        </Button>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          By applying, you're taking the first step toward better sleep and quality care for your newborn.
        </p>
      </div>
    </Section>
  );
};

export default FormSection;