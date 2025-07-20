import React from 'react';
import { motion } from 'framer-motion';

const ExportProcess = () => {
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
            Export <span className="text-blue-600">Process</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Detailed export process page content will be added here with step-by-step 
            process, shipping methods, and delivery timelines.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ExportProcess;