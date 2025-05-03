import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';

const Affiliates: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Generous Commissions</h3>
                    <p className="text-gray-600">Earn competitive commissions for every successful referral.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Easy Tracking</h3>
                    <p className="text-gray-600">Track your referrals and earnings through our affiliate dashboard.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Marketing Support</h3>
                    <p className="text-gray-600">Access promotional materials and support to help you succeed.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perfect For</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Healthcare Providers</h3>
                    <p className="text-gray-600">Doctors, midwives, and other healthcare professionals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parent Groups</h3>
                    <p className="text-gray-600">Parenting bloggers, influencers, and community leaders.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Baby Services</h3>
                    <p className="text-gray-600">Baby stores, photographers, and related service providers.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/77f5aY7gCri2NFXQ4sKp"
              style={{ width: '100%', height: '557px', border: 'none', borderRadius: '3px' }}
              id="inline-77f5aY7gCri2NFXQ4sKp" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Affiliate Onboarding"
              data-height="557"
              data-layout-iframe-id="inline-77f5aY7gCri2NFXQ4sKp"
              data-form-id="77f5aY7gCri2NFXQ4sKp"
              title="Affiliate Onboarding"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Affiliates;