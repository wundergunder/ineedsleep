import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';

const Terms: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32" background="white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">Last updated: April 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing and using iNeedSleep.ca, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                iNeedSleep.ca is a matching service that connects families with independent night nurses. We do not employ night nurses directly. Our role is limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Vetting potential night nurse candidates</li>
                <li>Matching families with suitable candidates</li>
                <li>Facilitating initial introductions</li>
                <li>Processing matching service fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Families</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate information during the matching process</li>
                <li>Pay the matching service fee as specified</li>
                <li>Conduct due diligence when hiring night nurses</li>
                <li>Negotiate terms directly with night nurses</li>
                <li>Comply with all applicable employment laws</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Night Nurses</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Maintain current certifications and qualifications</li>
                <li>Provide accurate information about experience and availability</li>
                <li>Maintain appropriate insurance coverage</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Fees and Payment</h2>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Matching service fees are non-refundable once the matching process begins</li>
                <li>Deposits are non-refundable</li>
                <li>Night nurse rates are set independently by each provider</li>
                <li>Payment arrangements between families and night nurses are handled directly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liability Limitations</h2>
              <p className="text-gray-600">
                iNeedSleep.ca is not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Actions or omissions of night nurses</li>
                <li>Disputes between families and night nurses</li>
                <li>Quality of care provided</li>
                <li>Employment arrangements or agreements</li>
                <li>Any damages or losses arising from the use of our service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600">
                All content on iNeedSleep.ca, including text, graphics, logos, and software, is our property and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600">
                We reserve the right to terminate or suspend access to our service immediately, without prior notice, for any conduct that we believe violates these Terms of Service or is harmful to other users or us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
              <p className="text-gray-600">
                For questions about these Terms of Service, please contact us through our website contact form.
              </p>
            </section>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Terms;