import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiArrowRight, FiGlobe } = FiIcons;

const ContactCTA = () => {
  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email Us',
      value: 'info@pakmeattraders.com',
      href: 'mailto:info@pakmeattraders.com'
    },
    {
      icon: FiGlobe,
      label: 'Website',
      value: 'pakmeattraders.com',
      href: 'https://pakmeattraders.com'
    },
    {
      icon: FiMapPin,
      label: 'Export Markets',
      value: 'Saudi Arabia, Dubai, Kuwait',
      href: null
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Ready to Start Your 
              <span className="text-blue-600"> Export Journey?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Contact us today to discuss your halal beef requirements and experience 
              the difference of working with Pakistan's trusted meat exporters.
            </p>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Get Your Export Quote Today
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Whether you need large-scale supply or consistent delivery, 
                  we're here to serve you with integrity and unmatched service.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-2 text-green-600">
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    <span>MOQ available on request</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    <span>Flexible delivery timelines</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    <span>Competitive pricing for B2B & B2C</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                    >
                      Get Quote Now
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="mailto:info@pakmeattraders.com"
                      className="group inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
                    >
                      <SafeIcon icon={FiMail} className="mr-2 w-5 h-5" />
                      Email Us
                    </a>
                  </motion.div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Contact Us"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pak Meat Traders Pvt
            </h3>
            <p className="text-blue-600 font-semibold text-lg">
              Committed to Quality. Trusted Worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;