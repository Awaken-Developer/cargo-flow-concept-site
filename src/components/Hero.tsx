
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Bot, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-logistics-primary to-logistics-primary/80 opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            AI Agents That Create Products You Actually Want
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
            Our AI agents analyze your behavior, conceive product ideas, build supply chains, and deliver personalized products at the optimal price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button className="bg-logistics-accent hover:bg-amber-500 text-white text-lg px-8 py-6">
              Install Agent <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 justify-start animate-fade-in">
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Brain size={20} className="text-white" />
              </div>
              <span>Analyzes Your Preferences</span>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Bot size={20} className="text-white" />
              </div>
              <span>Creates Product Concepts</span>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-logistics-accent rounded-full mr-3">
                <Package size={20} className="text-white" />
              </div>
              <span>Optimizes Supply Chain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
