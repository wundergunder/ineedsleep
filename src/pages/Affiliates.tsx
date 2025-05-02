import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';

const Affiliates: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Become an Affiliate Partner
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Partner with Calgary's premier night nurse matching service and earn commissions for referrals.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            {/* Placeholder for Go High Level form embed */}
            <div className="bg-gray-100 rounded p-8 text-center">
              <p className="text-gray-700">
                This is where the Go High Level form for affiliate applications will be embedded.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Affiliates;