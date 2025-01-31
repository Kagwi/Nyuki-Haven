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
    image: 'https://images.unsplash.com/photo-1601657672500-c51e8dd4f414?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
    <div className="min-h-screen bg-white px-4 md:px-8 lg:px-16">
      <section className="py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">About Nyuki Haven</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-yellow-50 p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-gray-700 text-sm md:text-base">
              <p className="mb-4">
                At Nyuki Haven, we are passionate about producing the highest quality honey while fostering a sustainable environment for bees. 
                Our honey is harvested with care, ensuring every jar is filled with pure, unprocessed goodness straight from the hive.
              </p>
              <p className="mb-4">
                Our mission is to not only provide delicious, natural honey but also to educate and inspire communities about the vital role bees play in our ecosystem.
                By choosing Nyuki Haven, you're supporting ethical beekeeping practices and helping to preserve these essential pollinators for future generations.
              </p>
              <p>
                Our vision is to be a global leader in sustainable honey production, pioneering eco-friendly methods and spreading awareness about the importance of bee conservation.
              </p>
            </div>
            <div className="relative w-full h-auto flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1595436065982-84f2640fd043?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Honey Harvest"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
