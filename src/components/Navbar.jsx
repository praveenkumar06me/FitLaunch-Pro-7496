import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <FaDumbbell className="text-primary text-2xl" />
            <span className="text-xl font-bold text-secondary">FitLife</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#workouts" className="text-gray-700 hover:text-primary transition-colors">Workouts</a>
            <a href="#progress" className="text-gray-700 hover:text-primary transition-colors">Progress</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition-colors">Pricing</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;