import { motion } from 'framer-motion';
import logoSrc from '../assets/logo-1.png'; 

const Footer = () => {
  return (
    <motion.footer
      id="footer"
      className=" text-slate" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* 1. The Call-to-Action Section */}
      <div className="bg-navy py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-lightest-slate mb-4">
            See what Galvan AI can do for you.
          </h2>
          <p className="text-lg text-slate mb-8 max-w-2xl mx-auto">
            Ready to unlock the power of your data? Our team is here to show you how.
          </p>
          
        </div>
      </div>

      {/* 2. The Main Multi-Column Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-1 lg:col-span-1">
            <a href="#" className="mb-4 inline-block">
              <img 
                src={logoSrc} 
                alt="Galvan AI Logo" 
                className="h-16 w-auto" 
              />
            </a>
            <p className="max-w-xs text-lg">
              Intelligent solutions for a data-driven world.
            </p>
          </div>


          {/* Column 2: Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-lightest-slate mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green transition-colors duration-200">Features</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Changelog</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-lightest-slate mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-lightest-slate mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">API Status</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Security</a></li>
              <li><a href="#" className="hover:text-green transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* 3. The Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-lightest-navy/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate mb-4 md:mb-0">
            © {new Date().getFullYear()} Galvan AI. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-green transition-colors duration-300">LinkedIn</a>
            <a href="#" className="hover:text-green transition-colors duration-300">GitHub</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;