
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DServLogo from './DServLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-logistics-primary text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <DServLogo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-logistics-accent transition-colors">Home</a>
            <a href="#services" className="hover:text-logistics-accent transition-colors">Services</a>
            <a href="#about" className="hover:text-logistics-accent transition-colors">About Us</a>
            <a href="#network" className="hover:text-logistics-accent transition-colors">Network</a>
            <a href="#contact" className="hover:text-logistics-accent transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-logistics-accent hover:bg-amber-500 text-white">Get a Quote</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#services" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#about" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</a>
              <a href="#network" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Network</a>
              <a href="#contact" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="bg-logistics-accent hover:bg-amber-500 text-white w-full">Get a Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
