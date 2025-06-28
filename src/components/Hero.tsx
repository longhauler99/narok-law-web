
import React from 'react';
import { Scale } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <Scale size={80} className="mx-auto mb-6 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Lemein & Co. Advocates
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
          Justice, Integrity, and Results
        </p>
        <p className="text-lg md:text-xl mb-10 text-blue-200 max-w-2xl mx-auto">
          Professional legal services in Narok Town. We provide comprehensive legal solutions 
          with decades of combined experience and unwavering commitment to our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-lg"
          >
            Get Legal Consultation
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg"
          >
            Our Services
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
