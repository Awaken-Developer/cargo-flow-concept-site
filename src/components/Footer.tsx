
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-logistics-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">CargoFlow</h3>
            <p className="mb-6">
              Global logistics solutions that connect businesses to markets worldwide, with reliability and efficiency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-logistics-accent p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-logistics-accent p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-logistics-accent p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-logistics-accent p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-logistics-accent transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-logistics-accent transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-logistics-accent transition-colors">About Us</a></li>
              <li><a href="#network" className="hover:text-logistics-accent transition-colors">Global Network</a></li>
              <li><a href="#contact" className="hover:text-logistics-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Road Freight</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Supply Chain</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="mr-3 flex-shrink-0 mt-1" />
                <span>123 Logistics Way, New York, NY 10001, United States</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>info@cargoflow.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} CargoFlow. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-logistics-accent transition-colors mr-6">Privacy Policy</a>
            <a href="#" className="hover:text-logistics-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
