
import React from 'react';
import { CornerDownRight } from 'lucide-react';

const AgentCommunicationFlow = () => {
  const steps = [
    "Analysis Agent monitors user behavior and identifies potential product needs",
    "Product Manager Agent develops concept based on Analysis Agent findings",
    "Builder Agent breaks down approved concepts into component specifications",
    "Crawler Agent searches global supply chains for optimal materials and manufacturing",
    "Contract Agent handles negotiations and financial optimizations",
    "Delivery Agent coordinates the most efficient delivery method"
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-logistics-primary">Agent Communication Flow</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Our AI agents communicate in a sequential flow, with each agent responsible for a specific part of the product creation and delivery process.
      </p>
      <ul className="space-y-4 text-gray-600">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start group">
            <div className="flex-shrink-0 h-6 mr-3 text-logistics-accent mt-0.5">
              <CornerDownRight size={18} className="group-hover:text-logistics-primary transition-colors" />
            </div>
            <span className="leading-relaxed group-hover:text-logistics-primary transition-colors">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AgentCommunicationFlow;
