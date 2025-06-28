
import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate' },
    { icon: Clock, number: '24/7', label: 'Support' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Lemein & Co. Advocates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located at Kims Plaza, Narok Town, we are a leading law firm dedicated to providing 
            exceptional legal services with integrity and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Lemein & Co. Advocates, we are committed to delivering outstanding legal services 
              that protect our clients' interests and uphold justice. Our team of experienced 
              advocates combines deep legal knowledge with a personal approach to every case.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe in building lasting relationships with our clients based on trust, 
              transparency, and results. Whether you're facing a complex legal challenge or 
              need preventive legal advice, we're here to guide you every step of the way.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Expert legal representation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Personalized attention to every case</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Transparent communication</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-gray-700">Competitive rates</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To be the most trusted and respected law firm in Narok and beyond, known for our 
              unwavering commitment to justice, ethical practice, and client satisfaction.
            </p>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Core Values</h4>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Integrity:</strong> Upholding the highest ethical standards</li>
              <li>• <strong>Excellence:</strong> Delivering superior legal services</li>
              <li>• <strong>Respect:</strong> Treating all clients with dignity</li>
              <li>• <strong>Innovation:</strong> Embracing modern legal solutions</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
