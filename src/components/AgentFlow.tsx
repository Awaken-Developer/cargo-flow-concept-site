
import React from 'react';
import AgentFlowDiagram from './AgentFlowDiagram';
import AgentCommunicationFlow from './AgentCommunicationFlow';
import UserInteractionPoints from './UserInteractionPoints';

const AgentFlow = () => {
  return (
    <section id="agent-flow" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">How Our Agents Connect</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI agents work in a sophisticated ecosystem to bring your personalized products from concept to reality.
          </p>
        </div>
        
        <div className="mt-6">
          <AgentFlowDiagram />
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AgentCommunicationFlow />
          <UserInteractionPoints />
        </div>
      </div>
    </section>
  );
};

export default AgentFlow;
