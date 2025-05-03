import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import ServicesSection from '../components/home/ServicesSection';
import Button from '../components/ui/Button';
import { Clock, Baby, Heart, Shield, Award, Star } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Night Nurse Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Calgary's premier matching service connecting families with qualified night nurses for newborn care.
          </p>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="white">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Night Nurses?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our night nurses provide exceptional care that benefits both babies and parents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Overnight Support</h3>
            <p className="text-gray-600">
              Professional care during the night hours when parents need rest the most, handling feedings, diaper changes, and soothing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Baby className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Newborn Care Expertise</h3>
            <p className="text-gray-600">
              Specialized knowledge in infant care, including feeding techniques, sleep training, and developmental milestones.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Parental Support</h3>
            <p className="text-gray-600">
              Guidance, education, and emotional support for new parents navigating the challenges of newborn care.
            </p>
          </div>
        </div>
      </Section>

      {/* What Makes Our Nurses Special */}
      <Section background="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Our Standards</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Our Night Nurses Special</h2>
            <p className="text-gray-600 mb-6">
              We rigorously vet all night nurses in our network to ensure they meet our high standards for professionalism, experience, and care.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <Shield className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Thorough Vetting</h3>
                  <p className="text-gray-600">All nurses undergo background checks and reference verification.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Certified & Experienced</h3>
                  <p className="text-gray-600">Minimum 2 years of newborn care experience and relevant certifications.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Highly Rated</h3>
                  <p className="text-gray-600">Consistently positive feedback from previous clients.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3662803/pexels-photo-3662803.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Night nurse caring for newborn"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-md p-4 max-w-xs">
              <p className="text-gray-700 italic text-sm">
                "Our night nurses are selected not just for their skills, but for their compassion and dedication to newborn care."
              </p>
              <p className="text-indigo-600 font-semibold text-sm mt-2">— Calgary Night Nurse Team</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services & Pricing */}
      <ServicesSection />

      {/* Custom Solutions */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="order-2 md:order-1 relative">
            <img 
              src="https://images.pexels.com/photos/5759593/pexels-photo-5759593.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Mother with twins"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <div className="absolute -top-5 -right-5 bg-indigo-600 text-white rounded-lg shadow-md p-4 max-w-xs">
              <p className="italic text-sm">
                "We specialize in finding the perfect night nurses for families with twins, triplets, and special needs babies."
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Special Situations</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Solutions for Special Needs</h2>
            <p className="text-gray-600 mb-6">
              We understand that some families have unique requirements. We offer specialized matching for:
            </p>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center text-indigo-600 font-semibold mr-3 flex-shrink-0">
                  M
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Multiples</h3>
                  <p className="text-gray-600">Specialized care for twins, triplets, or more.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center text-indigo-600 font-semibold mr-3 flex-shrink-0">
                  P
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Premature Babies</h3>
                  <p className="text-gray-600">Nurses with NICU experience for premature infants.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 rounded-full h-8 w-8 flex items-center justify-center text-indigo-600 font-semibold mr-3 flex-shrink-0">
                  S
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Special Medical Needs</h3>
                  <p className="text-gray-600">Caregivers with specific medical training for babies with health concerns.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Night Nurse?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Start your journey to restful nights with Calgary's most trusted night nurse matching service.
          </p>
          <Button 
            href="/apply" 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;