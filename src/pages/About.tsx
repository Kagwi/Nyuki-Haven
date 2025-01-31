import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, Star } from 'lucide-react';

const products = [
  { 
    size: '0.5',
    price: '15',
    description: 'Perfect for individual use',
    image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    size: '1',
    price: '25',
    description: 'Most popular family size',
    image: 'https://images.unsplash.com/photo-1558583055-d7ac00b1adca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    size: '2',
    price: '45',
    description: 'Great value for honey lovers',
    image: 'https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Image.jpg?raw=true&auto=format&fit=crop&w=800&q=80'
  },
  {
    size: '5',
    price: '100',
    description: 'Ideal for bulk buyers',
    image: 'https://images.unsplash.com/photo-1582300857444-88fa45163d4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const benefits = [
  { title: 'Natural sweetener with health benefits', details: 'Pure honey is a natural alternative to processed sugars' },
  { title: 'Rich in antioxidants', details: 'Contains compounds that protect your body from cell damage' },
  { title: 'Supports local bee populations', details: 'Our sustainable practices help maintain healthy bee colonies' },
  { title: 'Sustainable harvesting practices', details: 'We use methods that protect bees and their habitat' },
  { title: 'Pure and unprocessed', details: 'Our honey goes straight from hive to jar, maintaining all natural benefits' }
];

export default function About() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [expandedBenefit, setExpandedBenefit] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side image */}
          <div className="hidden md:block">
            <img
              src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Image.jpg?raw=true&auto=format&fit=crop&w=800&q=80"
              alt="Honey Harvest"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          
          {/* About Section */}
          <div className="max-w-3xl mx-auto text-gray-700 bg-yellow-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">About Nyuki Haven</h2>
            <p className="mb-4">
              Nyuki Haven is committed to producing high-quality honey using sustainable and ethical beekeeping practices.
              Our honey is harvested with care to ensure it retains its natural purity, taste, and health benefits.
            </p>
            <p className="mb-4">
              We partner with local beekeepers to promote eco-friendly practices that protect and nurture bee populations.
              Our approach not only provides premium honey but also contributes to environmental conservation and biodiversity.
            </p>
            <p className="mb-4">
              At Nyuki Haven, we believe in educating communities about the critical role of bees in agriculture and food production.
              Through awareness campaigns and beekeeping training, we empower individuals to take an active role in protecting these essential pollinators.
            </p>
            <p>
              Our goal is to create a sustainable future where high-quality honey is produced ethically while preserving the delicate balance of our ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
