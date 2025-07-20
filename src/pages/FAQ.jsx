import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
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
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Detailed FAQ page content will be added here with common questions 
            about products, shipping, pricing, and processes.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;