import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiShield, FiTruck, FiUsers, FiAward, FiHeart } = FiIcons;

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiHome,
      title: 'Family-Owned Business',
      description: 'A trusted family business managing our own cattle farms to ensure the highest quality standards from farm to fork.'
    },
    {
      icon: FiShield,
      title: 'In-House Facilities',
      description: 'Our hygienically approved, in-house slaughter facilities ensure complete control over quality and compliance.'
    },
    {
      icon: FiAward,
      title: 'PHA Certified',
      description: 'Certified by Pakistan Halal Authority with 100% manual halal slaughtering process for religious authenticity.'
    },
    {
      icon: FiTruck,
      title: 'Flexible Shipping',
      description: 'Air and sea shipping options with delivery timelines of 3-5 days (air) or 10-15 days (sea) based on your needs.'
    },
    {
      icon: FiUsers,
      title: 'B2B & B2C Services',
      description: 'Serving both business clients and individual customers with tailored solutions and competitive pricing.'
    },
    {
      icon: FiHeart,
      title: 'Trusted Since 2020',
      description: 'Years of experience building strong relationships with clients in Saudi Arabia, Dubai, and Kuwait.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Your Partner in 
            <span className="text-blue-600"> Business Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Pak Meat Traders Pvt, we are more than just meat exporters — we are partners 
            in your business growth with integrity and unmatched service.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-100 group-hover:bg-blue-200 p-3 rounded-lg w-fit mb-4 transition-colors duration-300">
                <SafeIcon icon={reason.icon} className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Get in touch today to discuss your requirements and experience the difference 
              of working with a certified, professional meat exporter from Pakistan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;