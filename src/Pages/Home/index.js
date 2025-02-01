import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "../../Components/ImageSlider";
import ServicesSection from "../../Components/Services";
import image1 from "../../Assests/Images/image1.jpg";
import image2 from "../../Assests/Images/image2.jpg";
import image3 from "../../Assests/Images/image3.jpg";

const images = [image3, image1, image2];

const Home = () => {
  const welcomeText = "Welcome to India Bhavan";

  // Animation Variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05, type: "spring", stiffness: 50 },
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Image Slider */}
      <ImageSlider images={images} />

      {/* Centered Heading */}
      <div className="flex justify-center items-center mt-10 mb-16 px-4">
        <h1 className="text-6xl font-extrabold text-red-600 text-center">
          {welcomeText.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Side: Welcome Message */}
        <motion.div
          className="lg:w-1/2 text-left lg:text-left p-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-2xl font-semibold leading-relaxed text-gray-800">
            <p className="mb-6">
              We are the perfect venue, be it business, family, or a special
              occasion.
            </p>
            <p className="mb-6">
              We offer an authentic Indian menu using a range of spices,
              including turmeric, a key ingredient in many Indian and Southeast
              Asian dishes. Try out our specialties - The Naan, famous Indian
              flat breads, Masala Dosas, and Hyderabad Biryanis.
            </p>
            <p className="mb-6">
              You can choose your menu from our large selection of Indian
              specialties whether you're looking to dine-in or takeout.
            </p>
            <p className="mb-6">
              We strive to make your every visit a true Indian dining
              experience.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="lg:w-1/2 p-4 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={image1}
            alt="India Bhavan"
            className="max-w-full max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div
        className="mt-16 mb-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <ServicesSection />
      </motion.div>
    </>
  );
};

export default Home;
