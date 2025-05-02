import React from 'react';
import Section from '../ui/Section';

const FormSection: React.FC = () => {
  // This component will contain the Go High Level form embed
  return (
    <Section id="apply" background="purple">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Apply Now</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started With Your Match</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Fill out the form below and we'll be in touch within 24 hours to begin your night nurse matching process.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
        {/* Placeholder for Go High Level form embed */}
        <div className="bg-gray-100 rounded p-8 text-center">
          <p className="text-gray-700">
            This is where the Go High Level form will be embedded. The actual form will be integrated by embedding the provided Go High Level form code here.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Form will collect: Name, Email, Phone, Expected due date or baby's birthdate, Type of service needed, and Preferred start date.
          </p>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600">
          By submitting this form, you're taking the first step toward better sleep and quality care for your newborn.
        </p>
      </div>
    </Section>
  );
};

export default FormSection;