import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="bg-purple-900 text-white py-3 px-4 shadow-lg"> {/* Reduced padding */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center group">
            <img 
              src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Nyuki_Haven_Logo.png?raw=true" 
              alt="Nyuki Haven Logo" 
              className="h-20 w-20 md:h-24 md:w-24 mr-3 group-hover:rotate-12 transition-transform object-contain" {/* Reduced logo size */}
            />
            <div>
              <Link to="/" className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">Nyuki Haven</Link> {/* Reduced text size */}
              <p className="text-base text-yellow-400 group-hover:text-white transition-colors">Nurturing Bees. Sustaining Life</p> {/* Reduced text size */}
            </div>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-3 md:mt-0`}> {/* Reduced margin */}
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5"> {/* Reduced spacing */}
            {/* ... rest of the navigation links ... */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
