import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Quote className="text-indigo-300 h-10 w-10 mb-4" />
      <p className="text-gray-700 italic mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img
              src={image}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-indigo-900">{author}</p>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;