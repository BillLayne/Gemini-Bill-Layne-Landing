
import React from 'react';
import { Icon } from './common/Icon';

const ServiceCard = ({ icon, title, description, imageUrl, isFeatured }: { icon: string, title: string, description: string, imageUrl: string, isFeatured?: boolean }) => (
  <div className={`rounded-2xl overflow-hidden transition-all duration-300 ${isFeatured ? 'bg-blue-600 text-white shadow-2xl' : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-1'}`}>
    <img src={imageUrl} alt={`Image for ${title}`} className="w-full h-48 object-cover" loading="lazy" />
    <div className="p-8">
      <div className={`inline-block p-3 rounded-full mb-4 ${isFeatured ? 'bg-white/20' : 'bg-blue-100'}`}>
        <Icon name={icon} className={`w-7 h-7 ${isFeatured ? 'text-white' : 'text-blue-600'}`} />
      </div>
      <h3 className={`text-2xl font-bold ${isFeatured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`mt-2 ${isFeatured ? 'text-blue-100' : 'text-gray-600'}`}>{description}</p>
      <a href="#advisor" className={`mt-6 inline-flex items-center font-semibold ${isFeatured ? 'text-white hover:text-blue-100' : 'text-blue-600 hover:text-blue-800'}`}>
        Learn More <Icon name="arrowRight" className="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Insurance That Fits Your Life in Rural NC</h2>
          <p className="mt-4 text-lg text-gray-600">We specialize in straightforward Auto and Home insurance policies designed for our community's needs.</p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard
            icon="car"
            title="Auto Insurance"
            description="Reliable coverage for your daily commute, farm truck, and everything in between. We'll help you navigate the open roads with confidence."
            imageUrl="https://raw.githubusercontent.com/BillLayne/bill-layne-images/a9c289237b74137ffdea344c0c51af4e2763a763/logos/car.167Z.png"
          />
          <ServiceCard
            icon="home"
            title="Home Insurance"
            description="Protect your biggest investment, from the foundation to the roof. We offer policies that cover what matters most to you and your family."
            imageUrl="https://raw.githubusercontent.com/BillLayne/bill-layne-images/a9c289237b74137ffdea344c0c51af4e2763a763/logos/home%20webpage.123Z.png"
            isFeatured
          />
        </div>
         <div className="text-center mt-12 text-gray-500">
          <p>We also offer coverage for RVs, motorcycles, boats, and businesses. <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contact us</a> to learn more.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
