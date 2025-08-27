import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { MessageCircle, Clock, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const ChatBotPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section className="pt-32 pb-16" background="indigo">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-full p-4 shadow-lg">
              <MessageCircle className="h-12 w-12 text-indigo-600" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Instant Help with Our Chat Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about our night nurse matching service? Our intelligent chat assistant is here to help you 24/7 with instant answers and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => {
                // This will trigger the chat widget to open
                const chatWidget = document.querySelector('[data-widget-id="68af6686741bbe283c6d785e"]');
                if (chatWidget) {
                  // Try to trigger the chat widget
                  const event = new CustomEvent('openChat');
                  window.dispatchEvent(event);
                }
              }}
              size="lg"
            >
              Start Chatting Now
            </Button>
            <Button href="/apply" variant="outline" size="lg">
              Apply Directly
            </Button>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="white">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Chat Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Use Our Chat Assistant?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the information you need quickly and efficiently, whenever you need it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Get answers to your questions any time of day or night, even when our team is offline.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Responses</h3>
            <p className="text-gray-600">
              No waiting for email replies. Get immediate answers to common questions about our services.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Human Handoff</h3>
            <p className="text-gray-600">
              For complex questions, seamlessly connect with our human team members during business hours.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Information</h3>
            <p className="text-gray-600">
              Get reliable, up-to-date information about our services, pricing, and process.
            </p>
          </div>
        </div>
      </Section>

      {/* What You Can Ask */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Common Topics</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Can You Ask Our Chat Assistant?</h2>
            <p className="text-xl text-gray-600">
              Our chat assistant is trained to help with a wide range of questions about our night nurse services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2" />
                Service Information
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• What is a night nurse?</li>
                <li>• How much do night nurses cost?</li>
                <li>• What services do you offer?</li>
                <li>• How is this different from an agency?</li>
                <li>• What qualifications do your nurses have?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2" />
                Process & Timeline
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• How long does matching take?</li>
                <li>• What's included in each package?</li>
                <li>• How do I get started?</li>
                <li>• What happens after I apply?</li>
                <li>• Can I interview the candidates?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2" />
                Pricing & Policies
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• What are your fees?</li>
                <li>• Is the deposit refundable?</li>
                <li>• What payment methods do you accept?</li>
                <li>• Do you offer payment plans?</li>
                <li>• What's your refund policy?</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowRight className="h-5 w-5 text-indigo-600 mr-2" />
                Special Situations
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Do you help with twins or multiples?</li>
                <li>• Can you find nurses for premature babies?</li>
                <li>• What about special medical needs?</li>
                <li>• Do you offer emergency placements?</li>
                <li>• Can I get a nurse for just one night?</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* How to Use */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full mb-4">Getting Started</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use the Chat Assistant</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Look for the Chat Icon</h3>
              <p className="text-gray-600">
                Find the chat bubble icon in the bottom right corner of any page on our website.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Click to Start</h3>
              <p className="text-gray-600">
                Click the chat icon to open the chat window and start your conversation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 text-indigo-600 font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ask Your Questions</h3>
              <p className="text-gray-600">
                Type your questions naturally - our assistant understands conversational language.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-indigo-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro Tips for Better Conversations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Be specific about your needs (twins, premature baby, etc.)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Mention your timeline if you have urgent needs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Ask follow-up questions for clarification</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Request to speak with a human for complex situations</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Questions Answered?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Our chat assistant is standing by to help you understand our services and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => {
                // Scroll to bottom to make chat more visible
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                // Try to trigger chat widget
                setTimeout(() => {
                  const event = new CustomEvent('openChat');
                  window.dispatchEvent(event);
                }, 500);
              }}
              size="lg" 
              className="bg-white text-indigo-600 hover:bg-indigo-50"
            >
              Start Chatting Now
            </Button>
            <Button 
              href="/apply" 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Apply Directly
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatBotPage;