import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import FAQItem from '../components/ui/FAQItem';
import Button from '../components/ui/Button';

const FAQ: React.FC = () => {
  const generalFAQs = [
    {
      question: "What is a night nurse?",
      answer: "A night nurse (also called a night nanny, newborn care specialist, or postpartum doula with overnight services) is a trained professional who provides overnight care for newborns and infants. They handle night feedings, diaper changes, and soothing, allowing parents to get much-needed rest during the night."
    },
    {
      question: "How is your service different from an agency?",
      answer: "Unlike agencies that employ caregivers directly, we're a matching service. We connect you with pre-vetted, independent night nurses. You pay us a one-time matching fee, then hire and pay the caregiver directly, which is often more cost-effective than agency rates with ongoing markups."
    },
    {
      question: "How much do night nurses cost in Calgary?",
      answer: "Night nurses in Calgary typically charge between $30-45 per hour depending on their experience, qualifications, and the specific needs of your family. For an 8-hour overnight shift, this would range from $240-360 per night. You'll negotiate rates directly with your chosen caregiver."
    },
    {
      question: "How many nights per week do families typically use a night nurse?",
      answer: "This varies greatly by family needs and budget. Some families hire night nurses for 7 nights a week in the beginning, then gradually reduce. Others start with 3-4 nights per week. The most common arrangement is 3-5 nights per week for 4-12 weeks."
    }
  ];

  const processFAQs = [
    {
      question: "How long does the matching process take?",
      answer: "Our typical matching process takes 5-7 days from the time we receive your completed intake form and deposit. For urgent requests, we can often expedite the process for an additional fee."
    },
    {
      question: "What if I don't like any of the matches provided?",
      answer: "If none of the initial matches feel right for your family, we'll work with you to understand what wasn't a good fit and provide additional matches. Our goal is to find the perfect night nurse for your family."
    },
    {
      question: "What qualifications do your night nurses have?",
      answer: "All night nurses in our network have at least 2 years of professional newborn care experience. Many have additional qualifications such as postpartum doula certification, Newborn Care Specialist certification, nursing education (RN, LPN), or specialized training in areas like multiples care, premature infant care, or sleep training."
    },
    {
      question: "Do you conduct background checks on the night nurses?",
      answer: "We verify that all night nurses in our network have a current vulnerable sector check. For an additional fee of $50-100 per candidate, we can arrange comprehensive background checks on your behalf."
    }
  ];

  const serviceFAQs = [
    {
      question: "What exactly does a night nurse do?",
      answer: "Night nurses typically arrive in the evening (usually between 9pm-11pm) and stay through the night until morning (usually 5am-7am). They handle all nighttime baby care, including bottle feeding or bringing breastfed babies to mom for nursing and then settling them back to sleep, diaper changes, soothing fussy babies, maintaining sleep logs if requested, and keeping the nursery tidy. They allow parents to get consolidated sleep while providing expert care for your newborn."
    },
    {
      question: "Can night nurses help with breastfeeding?",
      answer: "Yes! For breastfeeding mothers, night nurses can bring the baby to you for feeding, help with positioning, and then take the baby afterward for burping, diaper changes, and settling back to sleep. Many of our night nurses have additional training in breastfeeding support and can help with basic troubleshooting."
    },
    {
      question: "What about for formula-fed babies?",
      answer: "Night nurses can handle the entire feeding process for formula-fed babies, allowing parents to sleep through the night. They'll prepare bottles, feed, burp, change, and settle the baby back to sleep."
    },
    {
      question: "Do night nurses help with sleep training?",
      answer: "Many of our night nurses are knowledgeable about infant sleep and can help implement sleep training methods of your choice. However, formal sleep training is typically not started until at least 4 months of age. For newborns, they focus on establishing healthy sleep habits and routines."
    }
  ];

  const logisticsFAQs = [
    {
      question: "Where do night nurses sleep/stay during their shift?",
      answer: "Night nurses don't actually sleep during their shift - they're awake and caring for your baby throughout the night. They typically need a comfortable place to sit in the nursery or nearby room. Some families provide a guest room where the nurse can care for the baby during the night, allowing the rest of the household to sleep undisturbed."
    },
    {
      question: "What if my baby doesn't need care all night?",
      answer: "Even when your baby is sleeping, the night nurse remains awake and available. During quiet periods, they may prepare bottles for the next night, tidy the nursery, fold baby laundry, or update care logs. Their primary focus always remains monitoring your baby."
    },
    {
      question: "Can I book a night nurse for just one or two nights to try it out?",
      answer: "While most night nurses prefer regular, ongoing bookings, some may be available for trial nights. Let us know if you're interested in a shorter commitment initially, and we'll try to find candidates open to this arrangement."
    },
    {
      question: "What if I need to cancel a scheduled night?",
      answer: "Cancellation policies are established between you and your night nurse directly. Most night nurses request at least 24-48 hours notice for cancellations. Some may have a cancellation fee, especially for last-minute changes. We recommend discussing this during the interview process."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about our night nurse matching service.
          </p>
        </div>
      </Section>

      {/* FAQ Categories */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              General Questions
            </h2>
            <div className="space-y-1">
              {generalFAQs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Our Process
            </h2>
            <div className="space-y-1">
              {processFAQs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Night Nurse Services
            </h2>
            <div className="space-y-1">
              {serviceFAQs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Logistics & Scheduling
            </h2>
            <div className="space-y-1">
              {logisticsFAQs.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="light">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! Reach out to our team for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact">
              Contact Us
            </Button>
            <Button href="/apply" variant="outline">
              Start Application
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;