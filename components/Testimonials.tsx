
import React from 'react';
import { Testimonial } from '../types';
import { Icon } from './common/Icon';

const testimonialsData: Testimonial[] = [
  {
    quote: "Bill and his team saved us hundreds on our car insurance and made the whole process incredibly easy. As a local, it's great to have someone you can trust. Highly recommend!",
    name: "Sarah J.",
    location: "Elkin, NC",
    avatarUrl: "https://picsum.photos/id/237/100/100",
  },
  {
    quote: "When a tree fell on our house during a storm, the support we received was outstanding. They handled everything with the claim and were so compassionate.",
    name: "The Miller Family",
    location: "Jonesville, NC",
    avatarUrl: "https://picsum.photos/id/1027/100/100",
  },
  {
    quote: "As a small business owner, I need an agent who understands my risks. Bill Layne Insurance has been a fantastic partner for years, always responsive and helpful.",
    name: "David Chen",
    location: "Mount Airy, NC",
    avatarUrl: "https://picsum.photos/id/1005/100/100",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="w-5 h-5" />)}
    </div>
    <p className="text-gray-600 flex-grow">"{testimonial.quote}"</p>
    <div className="mt-6 flex items-center">
      <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
      <div className="ml-4">
        <p className="font-bold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Trusted by Your Neighbors</h2>
          <p className="mt-4 text-lg text-gray-600">
            Hear what folks from around Surry County are saying about their experience with us.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
