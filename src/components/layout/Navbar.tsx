import React, { useState, useEffect } from 'react';
import { Menu, X, Moon } from 'lucide-react';
import { Link } from '../ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white bg-opacity-95 shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Moon className="h-6 w-6 text-indigo-600 mr-2" />
            <span className="text-xl font-semibold text-indigo-900">
              iNeedSleep.ca
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Services
            </Link>
            <Link href="/process" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Our Process
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-indigo-600 transition-colors">
              FAQ
            </Link>
            <Link 
              href="/apply" 
              className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-all transform hover:scale-105"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-fadeIn">
            <div className="flex flex-col space-y-4 mt-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/process" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Process
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-indigo-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/apply" 
                className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition-all transform hover:scale-105 inline-block text-center"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;