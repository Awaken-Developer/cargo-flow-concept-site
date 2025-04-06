
import React from 'react';
import { Button } from '@/components/ui/button';

const stats = [
  { number: '120+', label: 'Countries' },
  { number: '250+', label: 'Distribution Centers' },
  { number: '1500+', label: 'Vehicles' },
  { number: '98%', label: 'On-time Delivery' },
];

const GlobalNetwork = () => {
  return (
    <section id="network" className="py-20 relative world-map-bg">
      <div className="absolute inset-0 bg-logistics-primary/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Global Network</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            With strategic locations across the globe, our network ensures efficient logistics solutions wherever you need them.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-3xl md:text-4xl font-bold text-logistics-accent mb-2">{stat.number}</h3>
              <p className="text-white font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-logistics-accent hover:bg-amber-500 text-white px-8 py-6 text-lg">
            Explore Our Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
