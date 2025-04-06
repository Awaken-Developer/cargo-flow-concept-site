
import React from 'react';
import { Clock, DollarSign, Smile, Lock, Award, Zap } from 'lucide-react';

const benefits = [
  {
    title: "Personalized Products",
    description: "Get products specifically designed based on your unique preferences and behavior patterns.",
    icon: Smile,
  },
  {
    title: "Cost Optimization",
    description: "Our agents negotiate the best prices and find the most cost-effective supply chains.",
    icon: DollarSign,
  },
  {
    title: "Time Efficiency",
    description: "From concept to delivery, the entire process is streamlined and optimized for speed.",
    icon: Clock,
  },
  {
    title: "Privacy Control",
    description: "Your data never leaves your device - analysis happens locally with your full control.",
    icon: Lock,
  },
  {
    title: "Quality Assurance",
    description: "The AI agents ensure products meet rigorous quality standards before procurement.",
    icon: Award,
  },
  {
    title: "Automated Negotiations",
    description: "Let the AI handle complex contract negotiations and supply chain management.",
    icon: Zap,
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-logistics-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">Why Choose DServ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-driven approach to product creation and supply chain optimization offers unique advantages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-logistics-accent flex items-center justify-center mb-4">
                <benefit.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-logistics-primary">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
