
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Bot, Package, ShoppingCart, BarChart3, Truck } from 'lucide-react';

const agentTypes = [
  {
    name: "Analysis Agent",
    icon: Brain,
    description: "Observes user behavior and preferences to identify product needs.",
    capabilities: [
      "Pattern recognition",
      "Preference learning",
      "Intent prediction",
      "Privacy-first analysis"
    ]
  },
  {
    name: "Product Manager Agent",
    icon: Bot,
    description: "Conceives product ideas and refines them based on user feedback.",
    capabilities: [
      "Concept generation",
      "Feature prioritization",
      "User validation",
      "Specification development"
    ]
  },
  {
    name: "Builder Agent",
    icon: Package,
    description: "Breaks down products into component parts and technical specifications.",
    capabilities: [
      "Component analysis",
      "Material specification",
      "Manufacturing requirements",
      "Quality standards"
    ]
  },
  {
    name: "Crawler Agent",
    icon: ShoppingCart,
    description: "Searches global supply chains to find optimal materials and manufacturing.",
    capabilities: [
      "Supplier evaluation",
      "Cost optimization",
      "Quality assessment",
      "Lead time analysis"
    ]
  },
  {
    name: "Contract Agent",
    icon: BarChart3,
    description: "Negotiates with suppliers and handles financial considerations.",
    capabilities: [
      "Price negotiation",
      "Currency optimization",
      "Risk assessment",
      "Contract management"
    ]
  },
  {
    name: "Delivery Agent",
    icon: Truck,
    description: "Coordinates the most efficient delivery method to the end user.",
    capabilities: [
      "Route optimization",
      "Carrier selection",
      "Delivery tracking",
      "Last-mile coordination"
    ]
  }
];

const Agents = () => {
  return (
    <section id="agents" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">Our AI Agents</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each specialized agent plays a critical role in bringing your personalized products from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentTypes.map((agent, index) => (
            <Card key={index} className="border-t-4 border-t-logistics-accent hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center mb-2">
                  <div className="p-2 rounded-full bg-logistics-primary/10 mr-3">
                    <agent.icon className="text-logistics-primary h-6 w-6" />
                  </div>
                  <CardTitle>{agent.name}</CardTitle>
                </div>
                <CardDescription>{agent.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="text-sm font-semibold mb-2 text-logistics-primary">Capabilities:</h4>
                <ul className="space-y-1">
                  {agent.capabilities.map((capability, i) => (
                    <li key={i} className="text-sm flex items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-logistics-accent mr-2"></span>
                      {capability}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
