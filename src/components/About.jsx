import { motion } from 'framer-motion';
import aboutUsImage from '../assets/about-img1.jpg';
import React from 'react';

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-lightest-slate mb-12">
        Who We Are
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h3 className="text-2xl font-semibold text-green mb-4">Our Mission</h3>
          <p className="text-slate text-lg mb-4">
            At Galvan AI, our mission is to democratize access to advanced artificial intelligence. We believe that AI has the power to solve some of the world's most complex problems, and we are dedicated to creating tools that are powerful, accessible, and easy to integrate.
          </p>
          <p className="text-slate  text-lg">
            Founded by a team of passionate researchers and engineers, we are driven by innovation and a commitment to ethical AI development. We partner with businesses of all sizes to help them harness the power of data and machine learning.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={aboutUsImage}
            alt="Our team collaborating on AI solutions"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default About;
