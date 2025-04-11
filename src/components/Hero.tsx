/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: itemVariants.hidden,
  visible: itemVariants.visible,
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.95,
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="w-full text-white py-16 relative overflow-hidden flex flex-col justify-start items-center">
      {/* Top Left Mesh Pattern */}
      <div className="absolute top-[6%] left-[10.5%] w-1/3 h-1/3 z-0">
        <svg
          className="w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="topLeftMesh"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* First row */}
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="0"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              {/* Second row */}
              <rect
                x="0"
                y="100"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="100"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              {/* Grid lines */}
              <path
                d="M 100 0 L 100 200 M 0 100 L 200 100"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topLeftMesh)" />
        </svg>
      </div>
      {/* Bottom Right Mesh Pattern - Use similar pattern with different ID */}
      <div className="absolute bottom-[40%] right-[10%] w-1/3 h-1/3 z-0">
        <svg
          className="w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="bottomRightMesh"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* First row */}
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="0"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              {/* Second row */}
              <rect
                x="0"
                y="100"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="100"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              {/* Grid lines */}
              <path
                d="M 100 0 L 100 200 M 0 100 L 200 100"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bottomRightMesh)" />
        </svg>
      </div>
      {/* Content - Wrap in a motion container */}
      <motion.div
        className="relative z-10 flex flex-col items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Badge */}
        <motion.div
          className="bg-[#2E6D9C] text-white border border-white px-3.5 py-1.5 flex justify-center items-center rounded-full font-[400] text-[0.95rem]"
          variants={itemVariants}
        >
          Welcome to KeySystem{" "}
        </motion.div>{" "}
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl max-w-2xl font-bold text-white text-center mt-7" // Added responsive text sizes
          variants={itemVariants}
        >
          IT Consulting for <br /> Forward-thinking Businesses
        </motion.h1>
        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-center mt-4 tracking-wide max-w-xl"
          variants={itemVariants}
        >
          Driving Digital Transformation, One Solution at a Time
        </motion.p>
        {/* Button Container - Animate this container */}
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-10 mb-16"
          variants={itemVariants}
        >
          <motion.button
            className="flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-3 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black transition duration-300 ease-in-out" // Keep Tailwind hovers for color/bg change
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started
          </motion.button>
          <motion.button
            className="flex items-center justify-center px-6 py-3 cursor-pointer text-white border-2 border-blue-500 backdrop-blur-xl rounded-full hover:bg-blue-600 hover:text-black transition duration-300 ease-in-out" // Keep Tailwind hovers for color/bg change
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>
        </motion.div>
        {/* Image Section - Animate this container */}
        <motion.div
          className="relative flex justify-center mb-2 w-full"
          variants={imageContainerVariants}
        >
          {/* Vector Stroke - Part of the image container animation */}
          <img src="vector-stroke.png" alt="" className="w-full" />
          {/* Image Container - Positioned absolutely */}
          <div className="max-w-4xl w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] absolute mx-auto rounded-2xl overflow-hidden shadow-lg -bottom-4 sm:-bottom-8 md:-bottom-12 lg:-bottom-16">
            {" "}
            <img
              src="image1.png"
              alt="Consulting Team"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.div>{" "}
      {/* End of content motion container */}
    </section>
  );
};

export default Hero;
