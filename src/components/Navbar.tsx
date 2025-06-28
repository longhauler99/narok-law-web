
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-blue-900">
              Lemein & Co. Advocates
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium bg-blue-900 text-white rounded-md w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
