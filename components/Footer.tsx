
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">Bill Layne Insurance</h3>
            <p className="text-gray-400 text-sm">
              Your local, independent insurance agency proudly serving Elkin, NC, and the surrounding Yadkin Valley.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="tel:336-835-1993" className="text-gray-300 hover:text-white transition-colors">(336) 835-1993</a></li>
              <li><a href="mailto:Save@BillLayneInsurance.com" className="text-gray-300 hover:text-white transition-colors">Save@BillLayneInsurance.com</a></li>
              <li className="text-gray-400">1283 N Bridge St, Elkin, NC 28621</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#advisor" className="text-gray-300 hover:text-white transition-colors">AI Advisor</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Bill Layne Insurance. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
