
import React from 'react';
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Scale className="text-yellow-400 mr-3" size={32} />
              <h3 className="text-2xl font-bold">Lemein & Co. Advocates</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional legal services in Narok Town. We provide comprehensive legal solutions 
              with integrity, excellence, and unwavering commitment to our clients' success.
            </p>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 text-yellow-400" />
                <span>Kims Plaza, 2nd Floor, Narok Town</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-yellow-400" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-yellow-400" />
                <span>info@lemeinco.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-100 hover:text-yellow-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Criminal Law</li>
              <li>Civil Litigation</li>
              <li>Family Law</li>
              <li>Property & Land Matters</li>
              <li>Employment Law</li>
              <li>Legal Advisory</li>
            </ul>
          </div>
        </div>

        {/* Social Media & Legal Links */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-yellow-400 transition-colors text-sm">
                Professional Ethics
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} Lemein & Co. Advocates. All rights reserved. | 
            Licensed by the Law Society of Kenya | 
            Professional legal services in Narok Town
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
