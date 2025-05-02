import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { CheckCircle } from 'lucide-react';

const Apply: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
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

      {/* Benefits */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
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
      </Section>

      {/* Form Section */}
      <Section background="purple">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Apply Now</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Your Application</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fill out the form below to begin the matching process. We'll be in touch within 24 hours to discuss your needs.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          {/* Placeholder for Go High Level form embed */}
          <div className="bg-gray-100 rounded p-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Night Nurse Application Form</h3>
            <p className="text-gray-700 mb-8">
              This is where the Go High Level form will be embedded. The actual form will be integrated by embedding the provided Go High Level form code here.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Form will collect: Name, Email, Phone, Baby's birthdate or due date, Type of service needed, and any specific requirements.
            </p>
            <div className="border border-dashed border-gray-300 p-6 text-left">
              <p className="text-gray-700 font-medium mb-2">Sample form fields:</p>
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Baby's Birth Date or Due Date</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">When would you like night nurse support to begin?</label>
                  <div className="h-10 bg-white border border-gray-300 rounded-md"></div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Any specific requirements or concerns?</label>
                  <div className="h-24 bg-white border border-gray-300 rounded-md"></div>
                </div>
              </div>
              <div className="bg-indigo-600 text-white py-2 px-4 rounded-md text-center font-medium">
                Submit Application
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-gray-600">
            By submitting this form, you're taking the first step toward better sleep and quality care for your newborn.
          </p>
        </div>
      </Section>

      {/* What Happens Next */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens After You Apply</h2>
            <p className="text-xl text-gray-600">
              Here's what to expect once you submit your application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Contact</h3>
              <p className="text-gray-600">
                We'll contact you within 24 hours to confirm your application and discuss next steps.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Detailed Intake</h3>
              <p className="text-gray-600">
                After your deposit, you'll complete a comprehensive intake form to help us understand your specific needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-indigo-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Matching Process</h3>
              <p className="text-gray-600">
                Within 5-7 days, you'll receive profiles of carefully selected night nurses matched to your requirements.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Apply;