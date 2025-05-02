import React from 'react';
import Section from '../ui/Section';
import FAQItem from '../ui/FAQItem';
import Button from '../ui/Button';

const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "What is a night nurse?",
      answer: "A night nurse is a qualified caregiver who specializes in overnight newborn care. They can be postpartum doulas, newborn care specialists, or experienced nannies with specific training in infant care. They help with night feedings, diaper changes, and sleep routines so parents can rest."
    },
    {
      question: "How much do night nurses typically charge in Calgary?",
      answer: "Night nurses in Calgary typically charge between $30-45 per hour depending on their experience, qualifications, and the specific needs of your family. For an 8-hour overnight shift, this would range from $240-360 per night."
    },
    {
      question: "What's the difference between your service and an agency?",
      answer: "Unlike agencies that employ night nurses directly and add overhead costs, we're a matching service. We connect you with pre-vetted, independent night nurses. You pay us a one-time matching fee, then hire and pay the caregiver directly, which is often more cost-effective."
    },
    {
      question: "How long does the matching process take?",
      answer: "Our matching process typically takes 5-7 days from the time we receive your completed intake form and deposit. For urgent requests, we can often expedite the process for an additional fee."
    }
  ];

  return (
    <Section id="faq" background="white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to frequently asked questions about our night nurse matching service.
          </p>
        </div>
        
        <div className="space-y-2">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Don't see your question answered?</p>
          <Button href="/faq" variant="outline">
            View All FAQs
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;