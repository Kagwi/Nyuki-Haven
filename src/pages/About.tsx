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
              <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Mission</h3>
              <p className="mb-4">
                Nyuki Haven's mission is to not only provide delicious, natural honey but also to educate and inspire communities about the vital role bees play in our ecosystem.
                By choosing Nyuki Haven, you're supporting ethical beekeeping practices and helping to preserve these essential pollinators for future generations.
              </p>
              <h3 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Vision</h3>
              <p>
                We aim to be a global leader in sustainable honey production, pioneering eco-friendly methods and spreading awareness about the importance of bee conservation.
              </p>
            </div>
            <div className="relative w-full h-auto flex justify-center">
              <img
                src="https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Image.jpg?raw=true&auto=format&fit=crop&w=600&q=80"
                alt="Honey Jar"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl">
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
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl">
          <h3 className="text-2xl font-bold text-purple-900 mb-6 text-center">Benefits of Honey</h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="https://github.com/Kagwi/Nyuki-Haven/blob/main/honeyimg.jpg?raw=true&auto=format&fit=crop&w=800&q=80"
                alt="Honey benefits"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3 max-w-none">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-lg overflow-hidden cursor-pointer mb-4"
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
