import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';

const Nurses: React.FC = () => {
  useEffect(() => {
    // Add message listener for iframe resizing
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
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/2biLveUCIECdBSIoaWBF" 
              style={{ border: 'none', width: '100%', minHeight: '800px' }} 
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