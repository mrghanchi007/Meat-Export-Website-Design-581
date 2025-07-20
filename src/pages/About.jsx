import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Pak Meat Traders</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Detailed about us page content will be added here with company history, 
            mission, vision, and team information.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;