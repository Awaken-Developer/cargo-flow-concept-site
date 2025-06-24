
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-logistics-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-logistics-primary mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team to learn how we can help optimize your logistics operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                  <Input id="company" placeholder="Your Company" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              
              <div>
                <label htmlFor="service" className="block mb-2 font-medium">Service Needed</label>
                <select id="service" className="w-full rounded-md border border-input px-3 py-2 bg-background">
                  <option value="">Select a service</option>
                  <option value="road">Road Freight</option>
                  <option value="ocean">Ocean Freight</option>
                  <option value="air">Air Freight</option>
                  <option value="warehousing">Warehousing</option>
                  <option value="supply">Supply Chain</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your logistics needs" rows={4} />
              </div>
              
              <Button className="w-full bg-logistics-primary hover:bg-logistics-primary/90 text-white">
                Submit Request
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-logistics-primary text-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-white/10 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>founders@transion.in</p>
                  </div>
                </div>
                
                <div className="pt-6 mt-6 border-t border-white/20">
                  <h4 className="font-bold mb-3">Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
