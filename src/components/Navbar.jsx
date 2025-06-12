import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logoSrc from '../assets/logo-1.png';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-lg bg-white backdrop-blur-sm' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
           {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img 
                src={logoSrc} 
                alt="Galvan AI Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white bg-vibrant-blue hover:text-vibrant-blue hover:bg-green px-3 py-2 rounded-md text-medium font-medium transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#"
                className="text-vibrant-blue border border-vibrant-blue rounded-md px-4 py-2 text-sm font-medium hover:text-green hover:border-green transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-vibrant-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white bg-vibrant-blue hover:text-vibrant-blue hover:bg-green block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;