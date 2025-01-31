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
    <div className="min-h-screen bg-white">
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">About Nyuki Haven</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-700 bg-yellow-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="mb-4">
                Nyuki Haven is a pioneering enterprise dedicated to producing the finest quality honey while championing sustainable beekeeping practices. Nestled in the lush, biodiverse regions of East Africa, our apiaries are carefully situated in pristine environments where bees thrive on native flora, ensuring the purity and rich flavor of our honey. Founded in 2015 by a team of ecologists and local beekeepers, Nyuki Haven emerged from a shared passion for environmental stewardship and a commitment to safeguarding the irreplaceable role of bees in our global ecosystem.
              </p>
              <h3 className="text-xl font-bold text-purple-900">Our Mission</h3>
              <p>
                At Nyuki Haven, our mission is twofold: to deliver pure, natural honey straight from the hive to your table, and to protect and nurture bee populations through innovative, eco-conscious practices. We prioritize the health of our bees by maintaining chemical-free environments, avoiding synthetic pesticides, and practicing ethical hive management. By partnering with local communities, we empower small-scale beekeepers with training and resources to adopt sustainable methods, ensuring both ecological and economic resilience.
              </p>
              <h3 className="text-xl font-bold text-purple-900 mt-4">Our Vision</h3>
              <p>
                We envision a world where honey production harmonizes with nature, rather than exploiting it. Nyuki Haven aims to become a global leader in sustainable apiculture, setting industry standards for ethical practices and transparency. Beyond production, we strive to ignite a movement—educating communities, schools, and policymakers about the critical importance of bees as pollinators and their impact on food security, biodiversity, and climate stability.
              </p>
            </div>
            <img
              src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Image.jpg?raw=true&auto=format&fit=crop&w=400&q=80"
              alt="Honey Harvest"
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
