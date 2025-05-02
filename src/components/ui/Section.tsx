import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'indigo' | 'purple';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    indigo: 'bg-indigo-50',
    purple: 'bg-purple-50',
  };
  
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;