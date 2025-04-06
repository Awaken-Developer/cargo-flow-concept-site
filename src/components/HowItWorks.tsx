
import React from 'react';
import { Brain, Bot, Package, ShoppingCart, BarChart3, Truck } from 'lucide-react';

const steps = [
  {
    title: 'Analysis Agent',
    description: 'Our AI agent deploys on your device, analyzing your patterns and preferences to conceive products you actually want.',
    icon: Brain,
  },
  {
    title: 'Product Manager Agent',
    description: 'Conceives detailed product concepts based on your behavior and preferences, presenting them for your approval.',
    icon: Bot,
  },
  {
    title: 'Builder Agent',
    description: 'Once approved, the builder agent identifies all necessary components and specifications for your product.',
    icon: Package,
  },
  {
    title: 'Crawler Agent',
    description: 'Searches global supply chains to find the most cost-effective materials and manufacturing facilities.',
    icon: ShoppingCart,
  },
  {
    title: 'Contract Agent',
    description: 'Negotiates contracts with suppliers, considering currency fluctuations, subsidies, and other factors.',
    icon: BarChart3,
  },
  {
    title: 'Delivery Agent',
    description: 'Coordinates the most efficient delivery method to bring your product to you at the lowest possible cost.',
    icon: Truck,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-logistics-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our network of AI agents works seamlessly to take you from product conception to delivery, with full control at every step.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-logistics-primary/10 inline-flex p-4 rounded-full mb-4">
                <step.icon className="text-logistics-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-logistics-primary">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
