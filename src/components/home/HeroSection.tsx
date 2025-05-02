import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg')] bg-center bg-cover opacity-20 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeIn">
            Rest for Parents. <br />
            <span className="text-indigo-300">Care for Babies.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100 animate-fadeInDelayed">
            Calgary's premier night nurse matching service, connecting exhausted parents with qualified newborn care specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInDelayed2">
            <Button href="/apply" size="lg">
              Find Your Night Nurse
            </Button>
            <Button href="/process" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
              Learn How It Works
            </Button>
          </div>
          <div className="mt-12 text-center">
            <p className="text-indigo-200 mb-4">Trusted by Calgary families</p>
            <div className="flex justify-center space-x-6 md:space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">150+</span>
                <span className="text-indigo-200 text-sm">Families Helped</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">25+</span>
                <span className="text-indigo-200 text-sm">Vetted Nurses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold">4.9/5</span>
                <span className="text-indigo-200 text-sm">Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;