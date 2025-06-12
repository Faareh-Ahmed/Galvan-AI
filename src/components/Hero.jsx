import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import bgImage1 from '../assets/home-one-img3.jpg';
import bgImage3 from '../assets/home-one-img2.jpg';

const heroContent = [
  {
    id: 1,
    headline: "The Future of Intelligence,",
    accent: "Distilled.",
    subline: "Galvan AI provides clarity in a complex world. We turn your data into your most valuable asset."
  },
  {
    id: 2,
    headline: "Your Vision,",
    accent: "Amplified by AI.",
    subline: "Integrate our powerful models to build the next generation of intelligent applications."
  }
];

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const image1Opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0]);
  const image3Opacity = useTransform(scrollYProgress, [0.66, 1], [1, 1]);

  const TextContent = ({ item, index, scrollYProgress }) => {
    const totalItems = heroContent.length;
    const start = index / totalItems;
    const end = (index + 1) / totalItems;
    const fadeInStart = start + 0.05;
    const fadeOutEnd = end - 0.05;
    let opacity, y;
    if (index === 0) {
      opacity = useTransform(scrollYProgress, [0, fadeOutEnd, end], [1, 1, 0]);
      y = useTransform(scrollYProgress, [0, fadeOutEnd, end], ["0px", "0px", "-30px"]);
    } else {
      opacity = useTransform(scrollYProgress, [start, fadeInStart, fadeOutEnd, end], [0, 1, 1, 0]);
      y = useTransform(scrollYProgress, [start, fadeInStart, fadeOutEnd, end], ["30px", "0px", "0px", "-30px"]);
    }
    return (
      <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-lightest-slate">
          {item.headline} <br /> <span className="text-green">{item.accent}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate">{item.subline}</p>
      </motion.div>
    );
  };

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-navy">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Images */}
        <motion.div style={{ opacity: image1Opacity }} className="absolute inset-0">
          <img src={bgImage1} alt="AI Background 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-blue-900/40"></div>
        </motion.div>

        <motion.div style={{ opacity: image3Opacity }} className="absolute inset-0 z-[-2]">
          <img src={bgImage3} alt="AI Background 3" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-blue-900/40"></div>
        </motion.div>

        {/* Text Container */}
        <div className="relative z-10 p-4 w-full max-w-4xl h-80 text-yellow-300">
          <div className="relative w-full h-full">
            {heroContent.map((item, index) => (
              <TextContent key={item.id} item={item} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default Hero;