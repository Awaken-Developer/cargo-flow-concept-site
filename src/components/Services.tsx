
import React from 'react';
import { Truck, Ship, Plane, Package, BarChart3, Factory } from 'lucide-react';

const services = [
  {
    title: 'Road Freight',
    description: 'Efficient and reliable road transportation services across all major routes.',
    icon: Truck,
  },
  {
    title: 'Ocean Freight',
    description: 'Global ocean shipping solutions for containerized, bulk and break-bulk cargo.',
    icon: Ship,
  },
  {
    title: 'Air Freight',
    description: 'Express air freight services for time-sensitive deliveries worldwide.',
    icon: Plane,
  },
  {
    title: 'Warehousing',
    description: 'Strategic warehousing and distribution solutions to optimize your supply chain.',
    icon: Package,
  },
  {
    title: 'Supply Chain',
    description: 'End-to-end supply chain management with real-time visibility and analytics.',
    icon: BarChart3,
  },
  {
    title: 'Industrial Logistics',
    description: 'Specialized logistics solutions for manufacturing and industrial sectors.',
    icon: Factory,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-logistics-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs with efficiency and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-logistics-primary/10 inline-flex p-4 rounded-full mb-4">
                <service.icon className="text-logistics-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-logistics-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
