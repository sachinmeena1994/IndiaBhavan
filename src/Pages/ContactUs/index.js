import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-50 py-12 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={itemVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-700 mb-6"
          variants={itemVariants}
        >
          We'd love to hear from you! Whether you have a question, feedback, or
          want to book an event, feel free to reach out.
        </motion.p>

        {/* Contact Details */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8"
          variants={itemVariants}
        >
          {/* Phone */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Phone</h3>
            <p className="text-gray-700">
              Call us at:{" "}
              <a
                href="tel:9204991414"
                className="text-green-600 hover:underline"
              >
                920-499-1414
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Email</h3>
            <p className="text-gray-700">
              Email us at:{" "}
              <a
                href="mailto:info@indiabhavan.com"
                className="text-green-600 hover:underline"
              >
                info@indiabhavan.com
              </a>
            </p>
          </div>

          {/* Address */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Address</h3>
            <p className="text-gray-700">
              Visit us at:
              <br />
              2611 Holmgren Way,
              <br />
              Green Bay, WI 54304
            </p>
          </div>

          {/* Social Media */}
          <div className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              Social Media
            </h3>
            <p className="text-gray-700">
              Follow us on:{" "}
              <a
                href="https://www.facebook.com/India-Bhavan-1501460733481466/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Facebook
              </a>
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div className="mt-10" variants={itemVariants}>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
