import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { CheckCircle, AlertCircle, Clock, DollarSign, Clipboard, Users } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Matching Process
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            How we connect Calgary families with their perfect night nurse match.
          </p>
        </div>
      </Section>

      {/* Timeline Details */}
      <Section background="white">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to Expect</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process is designed to find your perfect match as quickly and efficiently as possible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-indigo-200 ml-6 md:ml-8 pl-6 md:pl-8 space-y-12 relative">
            <div className="absolute top-0 left-0 -translate-x-1/2 h-full">
              <div className="sticky top-32 h-0">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Detailed Intake Form</h3>
              <p className="text-gray-600 mb-4">
                Fill out our comprehensive intake form with your family's details and night nurse requirements.
              </p>
              <div className="flex items-center text-indigo-600">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Estimated time: 20 minutes</span>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pay Deposit</h3>
              <p className="text-gray-600 mb-4">
                Secure your placement with a $250 deposit to begin the matching process.
              </p>
              <div className="flex items-center text-indigo-600">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Deposit: $250 (applied to your final fee)</span>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation Call</h3>
              <p className="text-gray-600 mb-4">
                Receive a calendar invite for a personalized consultation to discuss your needs in detail and answer any questions.
              </p>
              <div className="flex items-center text-indigo-600">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Duration: 30 minutes</span>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Matching Process</h3>
              <p className="text-gray-600 mb-4">
                Our team reviews our database of vetted night nurses to find the best matches for your family's specific needs, preferences, and schedule.
              </p>
              <div className="bg-indigo-50 border border-indigo-100 rounded-md p-4 mb-4">
                <div className="flex items-start">
                  <Clipboard className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Our Matching Criteria</h4>
                    <ul className="text-gray-600 mt-2 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Experience with your baby's age group/specific needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Availability matching your schedule requirements</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Care philosophy alignment with your preferences</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span>Proximity to your location in Calgary</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">5</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Your Matches</h3>
              <p className="text-gray-600 mb-4">
                You'll receive profiles of 3-5 carefully selected night nurses who match your requirements. Each profile includes their experience, qualifications, availability, and rates.
              </p>
              <div className="flex items-center text-indigo-600">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">3-5 qualified candidates to choose from</span>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">6</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview & Select</h3>
              <p className="text-gray-600 mb-4">
                Contact and interview your matched candidates, ask questions, and determine who is the best fit for your family. Once you've decided, you'll pay the balance of your placement fee.
              </p>
              <div className="flex items-center text-indigo-600 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Interview duration: ~30 minutes per candidate</span>
              </div>
              <div className="flex items-center text-indigo-600">
                <DollarSign className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Final payment: Remaining balance ($750 for Standard, $1,250 for Premium)</span>
              </div>
            </div>
            
            <div>
              <div className="absolute left-0 -translate-x-1/2 -translate-y-1/2">
                <div className="h-6 w-6 rounded-full bg-indigo-600 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">7</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hire & Begin Care</h3>
              <p className="text-gray-600 mb-4">
                Finalize arrangements directly with your chosen night nurse, including schedule, payment, and specific care instructions. Your night nurse will begin providing care based on your agreed schedule.
              </p>
              <div className="bg-green-50 border border-green-100 rounded-md p-4 flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Success!</h4>
                  <p className="text-gray-600 mt-1">
                    Enjoy your restful nights knowing your baby is in expert hands!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Important Notes */}
      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Important Notes</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Before You Apply</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Timing Your Application</h3>
                  <p className="text-gray-600">
                    We recommend applying 4-8 weeks before your desired start date. For expectant parents, we suggest applying during your third trimester. However, we can accommodate urgent requests when possible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Hiring</h3>
                  <p className="text-gray-600">
                    Remember that you'll be hiring the night nurse directly. You'll negotiate rates, schedule, and terms with them. Our service connects you with qualified candidates, but the employment relationship is between you and the caregiver.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Refund Policy</h3>
                  <p className="text-gray-600">
                    Your $250 deposit is non-refundable once we begin the matching process. The remaining balance is due only after you receive your matches. If you don't find a suitable match among our candidates, you can request additional matches or discuss other options with our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Begin the process today and be on your way to restful nights and peace of mind.
          </p>
          <Button 
            href="/apply" 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-50"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Process;