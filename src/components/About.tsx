
import React from 'react';
import { 
  BarChart, 
  Clock, 
  Globe, 
  Award
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-6">
              About CargoFlow
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With over 15 years of experience in the logistics industry, CargoFlow has established itself as a trusted partner for businesses worldwide. We specialize in providing integrated logistics solutions that optimize your supply chain and drive business growth.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our global network spans across 120+ countries, allowing us to deliver seamless logistics services regardless of your location or destination. We combine industry expertise, advanced technology, and a customer-centric approach to ensure your cargo reaches its destination safely and on time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Clock size={20} className="text-logistics-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">24/7 Service</h3>
                  <p className="text-gray-600">Round-the-clock logistics support</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Globe size={20} className="text-logistics-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Global Reach</h3>
                  <p className="text-gray-600">Operations in 120+ countries</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <BarChart size={20} className="text-logistics-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Real-time Tracking</h3>
                  <p className="text-gray-600">Advanced visibility solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Award size={20} className="text-logistics-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Certified Quality</h3>
                  <p className="text-gray-600">ISO 9001 and ISO 14001</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="bg-logistics-primary/10 p-1 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1595232208197-d94caa6a7757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Logistics warehouse" 
                className="rounded-lg w-full h-auto shadow-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-logistics-accent text-white p-6 rounded-lg shadow-lg max-w-xs">
              <h3 className="text-xl font-bold mb-2">15+ Years</h3>
              <p>Of excellence in global logistics and supply chain management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
