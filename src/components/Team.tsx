
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Advocate John Lemein',
      title: 'Senior Partner & Founder',
      specialization: 'Criminal Law & Civil Litigation',
      experience: '15+ Years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading criminal defense attorney with extensive experience in high-profile cases.',
      email: 'j.lemein@lemeinco.com',
      phone: '+254 700 123 456'
    },
    {
      name: 'Advocate Sarah Kiprotich',
      title: 'Partner',
      specialization: 'Family Law & Property Matters',
      experience: '12+ Years',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Compassionate family law advocate specializing in matrimonial and property disputes.',
      email: 's.kiprotich@lemeinco.com',
      phone: '+254 700 123 457'
    },
    {
      name: 'Advocate Michael Rotich',
      title: 'Associate',
      specialization: 'Employment Law & Legal Advisory',
      experience: '8+ Years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Expert in employment law and corporate legal advisory services.',
      email: 'm.rotich@lemeinco.com',
      phone: '+254 700 123 458'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Legal Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our experienced team of advocates dedicated to providing exceptional legal services 
            and achieving the best outcomes for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-yellow-400 text-black px-2 py-1 rounded">
                    {member.experience}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-900 font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600 mb-4">{member.specialization}</p>
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">{member.bio}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail size={16} className="mr-3 text-blue-900" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-900 transition-colors">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-3 text-blue-900" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-900 transition-colors">
                      {member.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Linkedin size={16} className="mr-3 text-blue-900" />
                    <a href="#" className="hover:text-blue-900 transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <button className="mt-6 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Team?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 text-sm">Combined 35+ years of legal experience across various practice areas.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Dedication</h4>
                <p className="text-gray-600 text-sm">Committed to achieving the best possible outcomes for every client.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-gray-600 text-sm">Always available to address your legal concerns and questions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                <p className="text-gray-600 text-sm">Proven track record of successful case outcomes and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
