import React from 'react';
import { Icon } from './common/Icon';

const Feature = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600">
        <Icon name={icon} className="w-6 h-6" />
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-bold text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <img
              src="https://raw.githubusercontent.com/BillLayne/bill-layne-images/31ce57748ce35edd4f59f49f823095f0a7aebf0b/logos/auto%20and%20home%20webpage.032Z.png"
              alt="Illustration of a protected home and car, symbolizing auto and home insurance coverage"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
              loading="lazy"
            />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-50 rounded-2xl -z-10 hidden lg:block"></div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              We're Not Just Agents. We're Your Neighbors.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              In a world of call centers and algorithms, we believe in the power of a handshake and a familiar voice. At Bill Layne Insurance, you get the best of both worlds: access to top-rated national carriers with the personal touch of a local Elkin agency that truly cares.
            </p>
            <div className="mt-10 space-y-8">
              <Feature
                icon="users"
                title="Local Expertise"
                description="We live here too. We understand the specific needs and risks of living in Surry County and the surrounding areas."
              />
              <Feature
                icon="shieldCheck"
                title="Independent & Unbiased"
                description="We work for you, not the insurance company. We'll shop multiple carriers to find the right fit for your needs and budget."
              />
              <Feature
                icon="phone"
                title="Personal Support"
                description="When you need help—especially during a claim—you'll talk to a real person from your community who is ready to advocate for you."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;