import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} Nyuki Haven. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}