import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiAward, FiUsers, FiTruck, FiHeart } = FiIcons;

const AboutPreview = () => {
  const stats = [
    { icon: FiAward, number: '4+', label: 'Years Experience' },
    { icon: FiUsers, number: '100+', label: 'Satisfied Clients' },
    { icon: FiTruck, number: '3', label: 'Export Countries' },
    { icon: FiHeart, number: '100%', label: 'Halal Certified' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                About Pak Meat Traders
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Your Trusted Partner in 
                <span className="text-blue-600"> Premium Halal Beef</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2020, Pak Meat Traders Pvt has been proudly supplying top-quality fresh halal beef 
              to premium markets across the Middle East. Our commitment to excellence begins at our 
              hygienically approved, in-house slaughter facilities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              As a family-owned business, we manage our own cattle farms to guarantee the highest 
              standards of animal health and meat quality. Certified by the Pakistan Halal Authority (PHA), 
              our 100% manual halal slaughtering process ensures authenticity and religious compliance.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/about"
                className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Learn More About Us
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Beef"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Stats Overlay */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <SafeIcon icon={stat.icon} className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;