
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Tools from './components/Tools';
import GeminiAdvisor from './components/GeminiAdvisor';
import Testimonials from './components/Testimonials';
import LocalPresence from './components/LocalPresence';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Tools />
        <GeminiAdvisor />
        <Testimonials />
        <LocalPresence />
      </main>
      <Footer />
    </div>
  );
};

export default App;