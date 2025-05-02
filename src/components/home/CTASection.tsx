import React from 'react';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Some Sleep?</h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Start your journey to restful nights and peaceful days with Calgary's most trusted night nurse matching service.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/apply" size="lg">
            Find Your Night Nurse
          </Button>
          <Button 
            href="/faq" 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:bg-opacity-10"
          >
            Common Questions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;