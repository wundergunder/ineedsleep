import React from 'react';
import Section from '../ui/Section';
import Step from '../ui/Step';
import Button from '../ui/Button';
import { ClipboardCheck, Phone, Users, CheckCircle, CreditCard, UserCheck } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Complete Detailed Intake',
      description: 'Fill out our comprehensive intake form to share your family\'s needs and preferences.',
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      number: 2,
      title: 'Pay Deposit',
      description: 'Secure your placement with a $250 deposit to begin the matching process.',
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      number: 3,
      title: 'Consultation Call',
      description: 'Receive a calendar invite for a personalized consultation to discuss your specific needs.',
      icon: <Phone className="h-5 w-5" />,
    },
    {
      number: 4,
      title: 'Receive Candidate Matches',
      description: 'We\'ll present you with 3-5 fully vetted night nurses matched to your requirements.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      number: 5,
      title: 'Interview Candidates',
      description: 'Meet your potential night nurses to find the perfect fit for your family.',
      icon: <UserCheck className="h-5 w-5" />,
    },
    {
      number: 6,
      title: 'Hire Your Night Nurse',
      description: 'Select your preferred caregiver, pay the remaining balance, and finalize arrangements directly.',
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ];

  return (
    <Section id="process" background="indigo">
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Our Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our simple 6-step process ensures you\'re matched with the right night nurse for your family\'s needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.map((step) => (
          <div key={step.number} className="bg-white rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <Step
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/apply" size="lg">
          Get Started Today
        </Button>
      </div>
    </Section>
  );
};

export default HowItWorksSection;