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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="max-w-3xl mx-auto text-gray-700 mb-12 bg-yellow-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">About Nyuki Haven</h2>
            <p className="mb-4">
              Nyuki Haven is dedicated to producing the finest quality honey while promoting sustainable beekeeping practices.
              Our mission is to provide pure, natural honey while protecting and nurturing bee populations.
            </p>
            <p>
              Our vision is to become a leading force in sustainable honey production while educating communities about the
              importance of bees in our ecosystem.
            </p>
          </div>
          
          {/* Right side image */}
          <div className="hidden md:block">
            <img
              src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Image.jpg?raw=true&auto=format&fit=crop&w=800&q=80"
              alt="Honey Harvest"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div 
              key={product.size}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setSelectedProduct(product)}
              onMouseLeave={() => setSelectedProduct(null)}
            >
              <div className="relative h-48">
                <img 
                  src={product.image} 
                  alt={`${product.size}kg honey jar`}
                  className="w-full h-full object-cover"
                />
                {selectedProduct === product && (
                  <div className="absolute inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center text-white p-4 text-center">
                    <p>{product.description}</p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-purple-900 mb-2">{product.size}kg Jar</h4>
                <p className="text-yellow-600 font-bold mb-4">${product.price}</p>
                <Link
                  to="/contact"
                  className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors inline-block w-full text-center"
                >
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Benefits of Honey</h3>
        <div className="max-w-2xl mx-auto space-y-4">
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
      </section>
    </div>
  );
}

