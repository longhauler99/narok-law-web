
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Get in touch with our experienced team 
            for a consultation. We're here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h4>
                  <p className="text-gray-600">
                    Kims Plaza, 2nd Floor<br />
                    Narok Town, Kenya<br />
                    P.O. Box 123-20500 Narok
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h4>
                  <p className="text-gray-600">
                    +254 700 123 456<br />
                    +254 733 456 789<br />
                    +254 20 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h4>
                  <p className="text-gray-600">
                    info@lemeinco.com<br />
                    consultation@lemeinco.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-900 text-white p-3 rounded-lg mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Emergency cases only
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/254700123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="mr-2" size={20} />
                WhatsApp Consultation
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="font-semibold">Kims Plaza, Narok Town</p>
                  <p className="text-sm">Interactive map would be embedded here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Brief description of your legal matter"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide details about your legal situation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This form is for general inquiries. For urgent legal matters, 
                please call us directly at +254 700 123 456 or use our WhatsApp consultation service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
