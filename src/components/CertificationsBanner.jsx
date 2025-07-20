import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiCheck, FiArrowRight } = FiIcons;

const CertificationsBanner = () => {
  const certifications = [
    {
      icon: FiShield,
      title: 'Pakistan Halal Authority',
      subtitle: 'PHA Certified',
      description: 'Official halal certification ensuring religious compliance'
    },
    {
      icon: FiAward,
      title: 'Quality Assurance',
      subtitle: 'ISO Standards',
      description: 'International quality management standards compliance'
    },
    {
      icon: FiCheck,
      title: 'Export License',
      subtitle: 'Government Approved',
      description: 'Licensed for international meat export operations'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
              Certifications & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Certified Excellence in 
              <span className="text-blue-200"> Every Process</span>
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Our commitment to quality is backed by official certifications and compliance 
              with international standards. Every step of our process is monitored and verified 
              to ensure the highest quality halal beef exports.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/certifications"
                className="group inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                View All Certifications
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <SafeIcon icon={cert.icon} className="w-6 h-6 text-blue-200" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
                    <p className="text-blue-200 font-medium text-sm mb-2">{cert.subtitle}</p>
                    <p className="text-blue-100 text-sm">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-blue-700"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">100%</div>
            <div className="text-blue-100 text-sm">Halal Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">24/7</div>
            <div className="text-blue-100 text-sm">Quality Control</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">3</div>
            <div className="text-blue-100 text-sm">Export Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">4+</div>
            <div className="text-blue-100 text-sm">Years Trusted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsBanner;