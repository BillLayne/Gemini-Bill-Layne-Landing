
import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#why-us">Why Us</NavLink>
      <NavLink href="#advisor">AI Advisor</NavLink>
      <NavLink href="#testimonials">Testimonials</NavLink>
    </>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Bill Layne <span className="text-blue-600">Insurance</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
               <a href="tel:336-835-1993" className="text-gray-700 font-semibold hover:text-blue-600 transition-colors">(336) 835-1993</a>
               <a href="#contact" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md">
                 Get a Quote
               </a>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {isMenuOpen ? (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`} >
        <div className="flex flex-col items-center justify-center h-full pt-20 space-y-8 text-xl">
          {navLinks}
           <a href="tel:336-835-1993" className="text-gray-700 font-semibold hover:text-blue-600 transition-colors">(336) 835-1993</a>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
