
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Ship, Plane } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-logistics-primary to-logistics-primary/80 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Global Logistics Solutions for a Connected World
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
            Reliable shipping and supply chain solutions that keep your business moving forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button className="bg-logistics-accent hover:bg-amber-500 text-white text-lg px-8 py-6">
              Get Started <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 justify-start animate-fade-in">
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Truck size={20} className="text-white" />
              </div>
              <span>Road Freight</span>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Ship size={20} className="text-white" />
              </div>
              <span>Ocean Freight</span>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Plane size={20} className="text-white" />
              </div>
              <span>Air Freight</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
