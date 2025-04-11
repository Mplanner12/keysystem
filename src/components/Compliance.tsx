"use client";

import React from "react";
import { motion } from "framer-motion";

const Compliance: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.section
      className="bg-gradient-to-b from-[#000017] to-[#03020A] text-white px-6 py-16 md:px-20 w-full flex flex-col justify-start items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div className="text-center max-w-4xl" variants={itemVariants}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          Compliance Certifications/ <br /> Standards We Specialize In
        </motion.h2>
        <motion.p
          className="text-md text-[#BBBBBB] mb-6 max-w-md mx-auto"
          variants={itemVariants}
        >
          Elevate Your Organization&apos;s Security Posture with Our
          Compliance/Standards Consulting Services
        </motion.p>
        <motion.button
          className="mt-4 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-3 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black transition duration-300 ease-in-out"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Contact Us
        </motion.button>
      </motion.div>

      <motion.div className="mt-12 mx-auto" variants={itemVariants}>
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.img
            src="/logos.png"
            alt="Certification Logo"
            className="w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Compliance;
