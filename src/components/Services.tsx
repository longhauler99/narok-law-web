
import React from 'react';
import { Gavel, Users, Home, Briefcase, Shield, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gavel,
      title: 'Criminal Law',
      description: 'Expert defense representation for criminal cases, ensuring your rights are protected throughout the legal process.',
      features: ['Criminal Defense', 'Court Representation', 'Legal Counsel', 'Case Analysis']
    },
    {
      icon: Scale,
      title: 'Civil Litigation',
      description: 'Comprehensive civil litigation services for disputes, contracts, and commercial matters.',
      features: ['Contract Disputes', 'Commercial Litigation', 'Debt Recovery', 'Appeals']
    },
    {
      icon: Users,
      title: 'Family Law',
      description: 'Sensitive handling of family matters including divorce, custody, and matrimonial disputes.',
      features: ['Divorce Proceedings', 'Child Custody', 'Alimony Cases', 'Adoption']
    },
    {
      icon: Home,
      title: 'Property & Land Matters',
      description: 'Complete property law services including transfers, disputes, and documentation.',
      features: ['Land Transfers', 'Property Disputes', 'Title Registration', 'Conveyancing']
    },
    {
      icon: Briefcase,
      title: 'Employment Law',
      description: 'Protecting employee and employer rights in workplace disputes and compliance matters.',
      features: ['Employment Contracts', 'Wrongful Termination', 'Workplace Disputes', 'Labor Relations']
    },
    {
      icon: Shield,
      title: 'Legal Advisory',
      description: 'Proactive legal consultation and advisory services to prevent legal issues before they arise.',
      features: ['Legal Consultation', 'Risk Assessment', 'Compliance Review', 'Contract Drafting']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Legal Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal services across multiple practice areas, 
            delivering expert representation and counsel for all your legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                <service.icon className="text-blue-900 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-900 font-semibold hover:text-blue-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-blue-900 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Don't wait until it's too late. Get professional legal advice and representation 
              when you need it most. Contact us today for a consultation.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
