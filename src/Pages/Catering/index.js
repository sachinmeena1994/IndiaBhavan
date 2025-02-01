import React from "react";
import { motion } from "framer-motion";

const Catering = () => {
  const events = [
    "Birthday Party",
    "Corporate Party",
    "Wedding Banquet",
    "Team Dinner",
    "Baby Shower",
    "Special Occasion",
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          variants={itemVariants}
        >
          Catering Services
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={itemVariants}
        >
          We offer catering services that are perfect for any event or party,
          business meeting, or special occasion. Our menu includes both
          vegetarian and non-vegetarian options. Customize your menu from our
          wide selection of Indian specialties.
        </motion.p>

        {/* List of Events */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center border hover:shadow-lg transition duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-blue-600">{event}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-10" variants={itemVariants}>
          <motion.button
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Catering
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Catering;
