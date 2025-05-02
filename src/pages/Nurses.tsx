import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';

const Nurses: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('2biLveUCIECdBSIoaWBF') as HTMLIFrameElement;
        if (iframe) {
          iframe.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join Our Network?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Schedule</h3>
                      <p className="text-gray-600">Choose your own hours and availability. Work as much or as little as you want.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Competitive Rates</h3>
                      <p className="text-gray-600">Set your own rates and work directly with families. No agency fees or markups.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Quality Matches</h3>
                      <p className="text-gray-600">We carefully screen families to ensure great matches for our nurses.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Experience</h3>
                      <p className="text-gray-600">Minimum 2 years of professional newborn care experience required.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Qualifications</h3>
                      <p className="text-gray-600">Current certifications in infant CPR and relevant newborn care credentials.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Legal Status</h3>
                      <p className="text-gray-600">Must be legally eligible to work in Canada with a clear background check.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Process</h2>
              <p className="text-gray-600 mb-6">
                Complete the form below to start your application. Our team will review your submission and contact you within 2-3 business days to discuss the next steps. Be prepared to provide:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Professional references</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Proof of certifications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Work eligibility documents</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Background check consent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/2biLveUCIECdBSIoaWBF" 
              style={{ border: 'none', width: '100%', minHeight: '1200px' }} 
              scrolling="no" 
              id="2biLveUCIECdBSIoaWBF" 
              title="Nurse Onboarding"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Nurses;