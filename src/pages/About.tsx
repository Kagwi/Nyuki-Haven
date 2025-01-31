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
          <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Benefits of Honey</h3>
          <div className="max-w-2xl mx-auto space-y-4 flex flex-col md:flex-row items-center">
            <img 
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Honey Benefits" 
              className="w-48 h-48 object-cover rounded-lg md:mr-6"
            />
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setExpandedBenefit(expandedBenefit === index ? null : index)}
                >
                  <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="text-yellow-400 mr-3 h-5 w-5" />
                      <h4 className="font-semibold">{benefit.title}</h4>
                    </div>
                    <Info className={`h-5 w-5 transform transition-transform ${expandedBenefit === index ? 'rotate-180' : ''}`} />
                  </div>
                  {expandedBenefit === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      {benefit.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
