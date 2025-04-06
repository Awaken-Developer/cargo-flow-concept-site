
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-logistics-primary text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">DServ</h3>
            <p className="mb-6">
              Revolutionizing product creation through AI agents that analyze, design, source, and deliver the products you truly want.
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
              <li><a href="#how-it-works" className="hover:text-logistics-accent transition-colors">How It Works</a></li>
              <li><a href="#agents" className="hover:text-logistics-accent transition-colors">Our Agents</a></li>
              <li><a href="#benefits" className="hover:text-logistics-accent transition-colors">Benefits</a></li>
              <li><a href="#contact" className="hover:text-logistics-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">AI Agents</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Analysis Agent</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Product Manager Agent</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Builder Agent</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Crawler Agent</a></li>
              <li><a href="#" className="hover:text-logistics-accent transition-colors">Contract Agent</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="mr-3 flex-shrink-0 mt-1" />
                <span>123 Innovation Way, San Francisco, CA 94107, United States</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-3 flex-shrink-0" />
                <span>info@dserv.ai</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} DServ. All rights reserved.</p>
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
