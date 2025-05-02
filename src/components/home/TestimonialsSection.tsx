import React, { useState, useEffect } from 'react';
import Section from '../ui/Section';
import Testimonial from '../ui/Testimonial';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "After struggling with sleepless nights for weeks, our night nurse was a lifesaver. The matching process was so easy, and we found the perfect fit for our family. I'm finally getting sleep again!",
      author: "Sarah M.",
      role: "Mother of newborn twins",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As a first-time dad, I was completely overwhelmed. Calgary Night Nurse connected us with an experienced caregiver who not only helped with night feedings but taught us so many valuable baby care skills.",
      author: "Michael T.",
      role: "New father",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The night nurse Calgary Night Nurse found for us was incredible with our premature baby. Her medical background gave us peace of mind, and she was so gentle and caring.",
      author: "Emma R.",
      role: "Mother of premature baby",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Worth every penny! After our third child was born, we knew we needed help. The personalized matching process found us someone who fit right into our family dynamic.",
      author: "David and Jen K.",
      role: "Parents of three",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "As working professionals, we needed reliable overnight care. Our night nurse has been consistently punctual, professional, and amazing with our baby. We couldn't be happier!",
      author: "Priya S.",
      role: "Working mother",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <Section id="testimonials" background="white">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hear from families who've found their perfect night nurse match.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Desktop View - Show 3 testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            return (
              <div key={index} className="opacity-100 transition-opacity duration-500">
                <Testimonial
                  quote={testimonials[index].quote}
                  author={testimonials[index].author}
                  role={testimonials[index].role}
                  image={testimonials[index].image}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile View - Show 1 testimonial */}
        <div className="md:hidden">
          <Testimonial
            quote={testimonials[currentIndex].quote}
            author={testimonials[currentIndex].author}
            role={testimonials[currentIndex].role}
            image={testimonials[currentIndex].image}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow-md text-indigo-600 hover:text-indigo-800 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex space-x-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-md text-indigo-600 hover:text-indigo-800 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;