import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      window.location.href = `mailto:contact@nyukihaven.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center animate-fade-in">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-yellow-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-purple-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="group hover:bg-purple-900 p-4 rounded-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-900 group-hover:bg-yellow-400 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <Mail className="text-yellow-400 group-hover:text-purple-900 transition-colors" />
                    </div>
                    <a 
                      href="mailto:contact@nyukihaven.com" 
                      className="group-hover:text-white transition-colors"
                    >
                      contact@nyukihaven.com
                    </a>
                  </div>
                </div>

                <div className="group hover:bg-purple-900 p-4 rounded-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-900 group-hover:bg-yellow-400 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <Phone className="text-yellow-400 group-hover:text-purple-900 transition-colors" />
                    </div>
                    <a 
                      href="tel:+1234567890" 
                      className="group-hover:text-white transition-colors"
                    >
                      +123 456 7890
                    </a>
                  </div>
                </div>

                <div className="group hover:bg-purple-900 p-4 rounded-lg transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-900 group-hover:bg-yellow-400 rounded-full flex items-center justify-center mr-4 transition-colors">
                      <MapPin className="text-yellow-400 group-hover:text-purple-900 transition-colors" />
                    </div>
                    <span className="group-hover:text-white transition-colors">123 Honey Lane, Beeville, BZ 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all hover:border-purple-900"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all hover:border-purple-900"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all hover:border-purple-900"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900 transition-all hover:border-purple-900"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></span>
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}