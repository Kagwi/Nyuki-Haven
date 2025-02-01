import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Leaf, TreeDeciduous, Heart, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    title: "Premium Quality",
    description: "Our honey is harvested with care to maintain its pure, natural qualities",
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-400" />,
    title: "100% Pure",
    description: "Unprocessed, raw honey direct from our sustainable apiaries",
  },
  {
    icon: <Leaf className="h-8 w-8 text-yellow-400" />,
    title: "Eco-Friendly",
    description: "Supporting bee populations and environmental sustainability",
  }
];

const impacts = [
  {
    icon: <TreeDeciduous className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
    title: "Environmental Impact",
    stats: "100+ Acres",
    description: "Protected pollinator habitat created and maintained across the country"
  },
  {
    icon: <Heart className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
    title: "Community Support",
    stats: "30+ Communities",
    description: "Local farming communities supported through sustainable beekeeping practices"
  },
  {
    icon: <Globe2 className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
    title: "Global Contribution",
    stats: "25% Reduction",
    description: "In carbon footprint through sustainable farming practices"
  }
];

export default function Home() {
  return (
    <div>
      {/* Improved Hero Section */}
      <section 
        className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Jar%20Background.jpg?raw=true")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backgroundPosition: 'center bottom'
        }}
      >
        <div className="text-center text-white z-10 px-4 max-w-6xl mx-auto">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold mb-4 leading-tight">
            Pure & Natural Honey
          </h1>
          <p className="text-[clamp(1rem,2vw,1.5rem)] mb-8 mx-auto max-w-2xl">
            Experience the sweetness of nature with our premium honey products
          </p>
          <Link 
            to="/contact"
            className="group bg-yellow-400 text-purple-900 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)'
            }}
          >
            Order Now
            <ArrowRight className="transform group-hover:translate-x-1 transition-transform w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-purple-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Impact</h2>
          <p className="text-center mb-12 text-yellow-400 max-w-2xl mx-auto px-4">
            At Nyuki Haven, we're committed to making a positive impact on the environment and communities through sustainable beekeeping
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 bg-purple-800 rounded-lg hover:bg-purple-700 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{impact.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{impact.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-2 text-center">{impact.stats}</p>
                <p className="text-center text-gray-200 text-sm md:text-base">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
