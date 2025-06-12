import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useMediaQuery from '../hooks/useMediaQuery';
import React from 'react';

const testimonialsData = [
  { id: 1, quote: "Galvan AI transformed our data analytics. Their platform is intuitive and incredibly powerful. We saw a 40% increase in operational efficiency.", name: "Jane Doe", title: "CEO, Tech Solutions Inc.", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 2, quote: "The team is top-notch. Their support and expertise were invaluable during the integration process. A true partner in innovation.", name: "John Smith", title: "CTO, Future Systems", avatar: "https://randomuser.me/api/portraits/men/34.jpg" },
  { id: 3, quote: "We needed a scalable AI solution and Galvan delivered beyond our expectations. Their models are accurate and have significantly improved our product.", name: "Emily White", title: "Head of Product, Innovate Corp", avatar: "https://randomuser.me/api/portraits/women/25.jpg" },
  { id: 4, quote: "The predictive analytics feature has been a game-changer for our marketing team, allowing us to be more proactive and effective.", name: "Alex Johnson", title: "CMO, MarketLeap", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 5, quote: "Their API is well-documented and easy to work with. We had our first prototype running within a single day. Highly recommended.", name: "Samantha Lee", title: "Lead Engineer, DevWorks", avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 6, quote: "The commitment to ethical AI and data privacy gave us the confidence we needed to choose Galvan AI as our long-term partner.", name: "David Chen", title: "Founder, TrustForward", avatar: "https://randomuser.me/api/portraits/men/62.jpg" }
];



const Testimonials = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  
  const visibleItems = isDesktop ? 2 : 1;
  // Creating the extended list with clones for the infinite loop
  const extendedData = [
    ...testimonialsData.slice(-visibleItems),
    ...testimonialsData,
    ...testimonialsData.slice(0, visibleItems),
  ];
  
  const [currentIndex, setCurrentIndex] = useState(visibleItems);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isJumpingRef = useRef(false);

  // Effect to handle the "magic jump" when reaching the cloned ends in order to create an infinite loop effect
  useEffect(() => {
    if (isJumpingRef.current) return;

    if (currentIndex === 0) {
      isJumpingRef.current = true;
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonialsData.length);
        setTimeout(() => setIsTransitioning(true), 50);
        isJumpingRef.current = false;
      }, 700); 
    } else if (currentIndex === extendedData.length - visibleItems) {
      isJumpingRef.current = true;
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleItems);
        setTimeout(() => setIsTransitioning(true), 50);
        isJumpingRef.current = false;
      }, 700);
    }
  }, [currentIndex, extendedData.length]);


  const handleNext = () => {
    if (isJumpingRef.current) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isJumpingRef.current) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section id="testimonials" className="bg-light-navy py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-lightest-slate mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center text-slate mb-12 max-w-2xl mx-auto">
          Our partners have transformed their businesses with our AI solutions.
        </p>

        <div className="relative">
          <div className="w-full mx-auto overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `calc(-${currentIndex * 100 / visibleItems}%)` }}
              transition={{ 
                duration: isTransitioning ? 0.7 : 0, 
                ease: [0.4, 0, 0.2, 1] 
              }}
            >
              {extendedData.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="w-full md:w-1/2 flex-shrink-0 p-4">
                  <TestimonialCard 
                    {...testimonial} 
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 p-2 rounded-full bg-lightest-navy/50 hover:bg-lightest-navy transition-colors z-10">
            <ChevronLeftIcon className="h-6 w-6 text-white"/>
          </button>
          <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 p-2 rounded-full bg-lightest-navy/50 hover:bg-lightest-navy transition-colors z-10">
            <ChevronRightIcon className="h-6 w-6 text-white"/>
          </button>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ quote, name, title, avatar, isActive }) => (
  <motion.div
    className="h-full"
    animate={{ scale: isActive ? 1.05 : 0.9, opacity: isActive ? 1 : 0.6 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div className={`h-full flex flex-col p-8 rounded-xl transition-colors duration-300 ${isActive ? 'bg-lightest-navy shadow-2xl' : 'bg-light-navy/50'}`}>
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full mx-auto mb-6 border-2 border-green"/>
      <p className="text-center text-slate text-base mb-6 italic grow">"{quote}"</p>
      <div className="text-center mt-auto">
        <p className="font-bold text-lightest-slate">{name}</p>
        <p className="text-sm text-green">{title}</p>
      </div>
    </div>
  </motion.div>
);

export default Testimonials;