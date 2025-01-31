import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Leaf, TreeDeciduous, Heart, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    title: "Premium Quality",
    description: "Our honey is harvested with care to maintain its pure, natural qualities",
    image: "https://raw.githubusercontent.com/Kagwi/Nyuki-Haven/main/Honey%20Jar%20Background.jpg",
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-400" />,
    title: "100% Pure",
    description: "Unprocessed, raw honey direct from our sustainable apiaries",
    image: "https://media.istockphoto.com/id/2161304146/photo/natural-organic-honey-in-glass-jar-honey-dipper-and-honeycombs-are-near-natural-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=8i8HlLRsrgKhoc7Nx63pXNbKzpV6EtdDz8ZPLAYb_5c=&q=80&w=400",
  },
  {
    icon: <Leaf className="h-8 w-8 text-yellow-400" />,
    title: "Eco-Friendly",
    description: "Supporting bee populations and environmental sustainability",
    image: "https://images.unsplash.com/photo-1607410863892-7a5b1979debb?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDJ8fGVjb2ZyaWVofGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
  }
];


const impacts = [
  {
    icon: <TreeDeciduous className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
    title: "Environmental Impact",
    stats: "1000+ Acres",
    description: "Protected pollinator habitat created and maintained across the country"
  },
  {
    icon: <Heart className="h-12 w-12 text-yellow-400 group-hover:scale-110 transition-transform" />,
    title: "Community Support",
    stats: "50+ Communities",
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
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://github.com/Kagwi/Nyuki-Haven/blob/main/Honey%20Jar%20Background.jpg?raw=true&auto=format&fit=crop&w=2000&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">Pure & Natural Honey</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the sweetness of nature with our premium honey products</p>
          <Link 
            to="/contact"
            className="group bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Order Now
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-purple-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Impact</h2>
          <p className="text-center mb-12 text-yellow-400 max-w-2xl mx-auto">
            At Nyuki Haven, we're committed to making a positive impact on the environment and communities through sustainable beekeeping
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="group p-8 bg-purple-800 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4 flex justify-center">{impact.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-center">{impact.title}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-2 text-center">{impact.stats}</p>
                <p className="text-center text-gray-200">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
