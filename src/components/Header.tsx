import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="bg-purple-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center group">
            <img 
              src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Nyuki_Haven_Logo.png?raw=true" 
              alt="Nyuki Haven Logo" 
              className="h-20 w-20 md:h-24 md:w-24 mr-4 group-hover:rotate-12 transition-transform object-contain"
            />
            <div>
              <Link to="/" className="text-3xl font-bold group-hover:text-yellow-400 transition-colors">Nyuki Haven</Link>
              <p className="text-lg text-yellow-400 group-hover:text-white transition-colors">Nurturing Bees. Sustaining Life</p>
            </div>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <Link 
                to="/" 
                className={`block py-2 md:py-0 hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 md:py-0 hover:text-yellow-400 transition-colors ${isActive('/about') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`block py-2 md:py-0 hover:text-yellow-400 transition-colors ${isActive('/contact') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
