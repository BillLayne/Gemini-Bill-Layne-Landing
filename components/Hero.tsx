
import React from 'react';
import { Icon } from './common/Icon';

const partners = [
  { name: 'Nationwide', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Nationwide%20Logo%20(1).webp' },
  { name: 'Progressive', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Progressive%20Logo.webp' },
  { name: 'National General', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/National%20General%20Insurance%20Logo.webp' },
  { name: 'Travelers', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Travelers%20Logo.webp' },
  { name: 'Alamance Farmers', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Alamance%20Logo.webp' },
  { name: 'NC Grange', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/NC%20Grange%20Logo.webp' },
];

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-gray-200/40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">Your Neighbor, Your Agent in Elkin, NC</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
            Honest Insurance Advice for Our North Carolina Neighbors
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            As your local, independent agency, we're focused on finding the right auto and home coverage for you. No jargon, no pressure—just straightforward guidance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#advisor" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Icon name="sparkles" />
              Try Our AI Advisor
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3.5 rounded-full font-semibold text-lg border-2 border-blue-200 hover:bg-blue-50 transition-all duration-300">
              Speak to an Agent
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <p className="text-3xl lg:text-4xl font-bold text-blue-600">25+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Years Serving NC</p>
            </div>
            <div className="p-2">
              <p className="text-3xl lg:text-4xl font-bold text-blue-600">5,000+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Happy Customers</p>
            </div>
             <div className="p-2">
              <p className="flex items-center justify-center text-3xl lg:text-4xl font-bold text-blue-600">
                4.8 <Icon name="star" className="w-6 h-6 text-yellow-400 ml-1" />
              </p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Google Reviews</p>
            </div>
            <div className="p-2">
              <p className="text-3xl lg:text-4xl font-bold text-blue-600">9+</p>
              <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">Top Carriers</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
                Proudly working with top-rated insurance carriers
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12">
            {partners.map((partner) => (
                <img
                key={partner.name}
                src={partner.logoUrl}
                alt={`${partner.name} Insurance Partner`}
                className="h-8 sm:h-10 w-auto object-contain transition-all duration-300"
                loading="lazy"
                />
            ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
