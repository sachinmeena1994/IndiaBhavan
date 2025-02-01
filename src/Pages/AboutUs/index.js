import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
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
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-700 mb-6"
          variants={itemVariants}
        >
          We are the perfect venue, be it business, family, or a special
          occasion.
        </motion.p>

        {/* Highlight Section */}
        <motion.p
          className="text-lg text-gray-700 mb-6"
          variants={itemVariants}
        >
          We offer an authentic Indian menu using a range of spices, including{" "}
          <span className="text-yellow-600 font-semibold">turmeric</span>, a key
          ingredient in many Indian and Southeast Asian dishes. Try out our
          specialties -{" "}
          <span className="text-red-500 font-semibold">The Naan</span>, famous
          Indian flatbreads,{" "}
          <span className="text-red-500 font-semibold">Masala Dosas</span>, and{" "}
          <span className="text-red-500 font-semibold">Hyderabad Biryanis</span>
          .
        </motion.p>

        {/* Callout Section */}
        <motion.p
          className="text-lg text-gray-700 mb-6"
          variants={itemVariants}
        >
          You can choose your menu from our large selection of Indian
          specialties, whether you're looking to{" "}
          <span className="text-green-600 font-semibold">dine-in</span> or{" "}
          <span className="text-green-600 font-semibold">takeout</span>.
        </motion.p>

        {/* Closing Statement */}
        <motion.p className="text-lg text-gray-700" variants={itemVariants}>
          We strive to make your every visit a true Indian dining experience.
        </motion.p>

        {/* Decorative Line */}
        <motion.div className="mt-10" variants={itemVariants}>
          <hr className="border-t-2 border-yellow-500 w-1/4 mx-auto" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
