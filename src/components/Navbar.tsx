
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
            <a href="#how-it-works" className="hover:text-logistics-accent transition-colors">How It Works</a>
            <a href="#agents" className="hover:text-logistics-accent transition-colors">Our Agents</a>
            <a href="#benefits" className="hover:text-logistics-accent transition-colors">Benefits</a>
            <a href="#contact" className="hover:text-logistics-accent transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <Button className="bg-logistics-accent hover:bg-amber-500 text-white">Get Started</Button>
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
              <a href="#how-it-works" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
              <a href="#agents" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Our Agents</a>
              <a href="#benefits" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Benefits</a>
              <a href="#contact" className="hover:text-logistics-accent transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <Button className="bg-logistics-accent hover:bg-amber-500 text-white w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
