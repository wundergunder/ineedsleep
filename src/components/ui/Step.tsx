import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="flex items-start p-4 md:p-6">
      <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center text-indigo-600 font-semibold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <div className="flex items-center mb-2">
          <span className="text-indigo-600 mr-2">{icon}</span>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Step;