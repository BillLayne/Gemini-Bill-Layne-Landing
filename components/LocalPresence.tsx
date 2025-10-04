
import React from 'react';
import { Icon } from './common/Icon';

const LocalPresence: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Ready to Talk? We're Here to Help.</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're ready for a quote or just have a few questions, we'd love to hear from you.
          </p>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-gray-50 p-8 sm:p-12 rounded-2xl border border-gray-200">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">Bill Layne Insurance Agency</h3>
              <p className="mt-2 text-gray-600">Your local independent agency in Elkin, NC.</p>
            </div>
            <div className="mt-8 space-y-4 text-gray-700">
              <div className="flex items-center">
                <Icon name="phone" className="w-5 h-5 text-blue-600 mr-3" />
                <a href="tel:336-835-1993" className="font-semibold text-lg hover:text-blue-600">(336) 835-1993</a>
              </div>
              <div className="flex items-center">
                <Icon name="mail" className="w-5 h-5 text-blue-600 mr-3" />
                <a href="mailto:Save@BillLayneInsurance.com" className="hover:text-blue-600">Save@BillLayneInsurance.com</a>
              </div>
              <div className="flex items-start">
                <Icon name="mapPin" className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p>1283 N Bridge St</p>
                  <p>Elkin, NC 28621</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
                <a 
                   href="https://www.google.com/maps/place/Bill+Layne+Insurance+Agency" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                    Get Directions
                    <Icon name="externalLink" className="w-4 h-4" />
                </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden h-80 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3209.610545300624!2d-80.8507206847198!3d36.2652999800234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8851ab7bb1cf3bbf%3A0xc55b0a3d87e4ca10!2sBill%20Layne%20Insurance%20Agency!5e0!3m2!1sen!2sus!4v1620836551061!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Bill Layne Insurance Agency Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalPresence;
