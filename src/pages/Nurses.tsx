import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';

const Nurses: React.FC = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Night Nurse Network
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with Calgary families seeking qualified night nurses for newborn care.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/2biLveUCIECdBSIoaWBF" 
              style={{ border: 'none', width: '100%' }} 
              scrolling="no" 
              id="2biLveUCIECdBSIoaWBF" 
              title="Nurse Onboarding"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Nurses;