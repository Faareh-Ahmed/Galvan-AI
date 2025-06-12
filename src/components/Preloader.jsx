
import { motion } from 'framer-motion';
import logoSrc from '../assets/logo-1.png';

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.5, rotate: -45 },
  animate: {
    opacity: 1,
    scale: 1.2,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
      duration: 1.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    rotate: 10,
    transition: { duration: 0.6 },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.4 },
  },
};

const Preloader = ({ onComplete }) => {
  const loadingText = "Your Gateway to AI Excellence";

  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-navy z-[100]"
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={onComplete} 
    >
      <motion.div
        variants={containerVariants}
        className="text-center"
      >
        <motion.img
          src={logoSrc}
          alt="Galvan AI Loading"
          variants={logoVariants}
          className="h-24 w-auto mb-8"
        />

        <motion.div
          className="flex flex-wrap justify-center"
          variants={containerVariants}
        >
          {loadingText.split('').map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-lg font-mono text-lightest-slate"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
