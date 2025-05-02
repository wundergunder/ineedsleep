import React from 'react';
import { Moon, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Moon className="h-6 w-6 text-indigo-300 mr-2" />
              <span className="text-xl font-semibold">iNeedSleep.ca</span>
            </div>
            <p className="text-indigo-200 mt-2">
              Connecting Calgary families with qualified night nurses for newborn care and parental rest.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-200 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-indigo-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-indigo-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-indigo-200 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-indigo-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-indigo-200 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-300 mr-2 mt-0.5" />
                <span className="text-indigo-200">Calgary, Alberta</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-indigo-300 mr-2 mt-0.5" />
                <a 
                  href="mailto:info@ineedsleep.ca" 
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  info@ineedsleep.ca
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-indigo-300 mr-2 mt-0.5" />
                <a 
                  href="tel:+14035551234" 
                  className="text-indigo-200 hover:text-white transition-colors"
                >
                  (403) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-indigo-300">
            &copy; {currentYear} iNeedSleep.ca. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/privacy" className="text-indigo-300 hover:text-white transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-indigo-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;