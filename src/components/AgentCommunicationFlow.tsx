
import React from 'react';

const AgentCommunicationFlow = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3 text-logistics-primary">Agent Communication Flow</h3>
      <p className="text-gray-600 mb-4">
        Our AI agents communicate in a sequential flow, with each agent responsible for a specific part of the product creation and delivery process.
      </p>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Analysis Agent monitors user behavior and identifies potential product needs</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Product Manager Agent develops concept based on Analysis Agent findings</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Builder Agent breaks down approved concepts into component specifications</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Crawler Agent searches global supply chains for optimal materials and manufacturing</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Contract Agent handles negotiations and financial optimizations</span>
        </li>
        <li className="flex items-start">
          <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mt-2 mr-2 flex-shrink-0"></span>
          <span>Delivery Agent coordinates the most efficient delivery method</span>
        </li>
      </ul>
    </div>
  );
};

export default AgentCommunicationFlow;
