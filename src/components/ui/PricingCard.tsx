import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText?: string;
  ctaHref?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Get Started',
  ctaHref = '/apply',
}) => {
  return (
    <div className={`
      rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl
      ${popular ? 'border-2 border-indigo-500 scale-105 md:scale-110 relative z-10 bg-white' : 'bg-white border border-gray-200'}
    `}>
      {popular && (
        <div className="bg-indigo-500 text-white text-center py-1 text-sm font-medium">
          MOST POPULAR
        </div>
      )}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-indigo-600">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">flat fee</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 mt-0.5 ${feature.included ? 'text-green-500' : 'text-gray-300'}`} />
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          href={ctaHref} 
          variant={popular ? 'primary' : 'outline'} 
          size="lg" 
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;