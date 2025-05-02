import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';

const Apply: React.FC = () => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'setHeight') {
        const iframe = document.getElementById('oUqYSWSK7acDphldA1JZ') as HTMLIFrameElement;
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
            Apply for Night Nurse Matching
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step toward peaceful nights and expert newborn care.
          </p>
        </div>
      </Section>

      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Families Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Matching</h3>
                    <p className="text-gray-600">We carefully match your family with the most suitable night nurses based on your specific needs and preferences.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Rigorous Vetting</h3>
                    <p className="text-gray-600">Every night nurse in our network has been thoroughly screened, with verified references and background checks.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost-Effective</h3>
                    <p className="text-gray-600">Our one-time matching fee is more affordable than ongoing agency markups, saving you money while still finding top quality care.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Expertise</h3>
                    <p className="text-gray-600">We specialize exclusively in Calgary, ensuring all our night nurses are familiar with the local area and available nearby.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3875225/pexels-photo-3875225.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Peaceful baby sleeping"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-0 bg-indigo-200 rounded-lg w-full h-full"></div>
              <div className="absolute -top-6 -right-6 z-0 bg-purple-200 rounded-lg w-full h-full"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/oUqYSWSK7acDphldA1JZ" 
              style={{ border: 'none', width: '100%', minHeight: '1200px' }} 
              scrolling="no" 
              id="oUqYSWSK7acDphldA1JZ" 
              title="Parent Onboarding"
            />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Apply;