
import React from 'react';

const partners = [
  { name: 'Nationwide', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Nationwide%20Logo%20(1).webp' },
  { name: 'Progressive', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Progressive%20Logo.webp' },
  { name: 'National General', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/National%20General%20Insurance%20Logo.webp' },
  { name: 'Travelers', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Travelers%20Logo.webp' },
  { name: 'Alamance Farmers', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/Alamance%20Logo.webp' },
  { name: 'NC Grange', logoUrl: 'https://raw.githubusercontent.com/BillLayne/bill-layne-images/refs/heads/main/logos/NC%20Grange%20Logo.webp' },
];

const Partners: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Proudly working with top-rated insurance carriers
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 sm:gap-x-12">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logoUrl}
              alt={`${partner.name} Insurance Partner`}
              className="h-8 sm:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
