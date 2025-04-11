/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textItemVariants = {
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

const logoContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const logoItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const OurPartners: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const logos = [
    { src: "/software-group.png", alt: "SOFTWARE GROUP" },
    { src: "/cognizab.png", alt: "cognizant" },
    { src: "/temenos.png", alt: "temenos" },
    { src: "/NETInfo.png", alt: "NETInfo" },
    { src: "/Tech-mahin.png", alt: "TECH MAHINDRA" },
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-tr from-[#03020A] via-[#020106] to-[#03020A] text-white py-16 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="px-6 md:px-20 mb-14">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-3.5"
          variants={textItemVariants}
        >
          Our Partners
        </motion.h2>
        <motion.p
          className="text-lg text-white text-center mb-10"
          variants={textItemVariants}
        >
          Creating a Synergy with global brands
        </motion.p>
      </motion.div>
      <motion.div
        className="w-full bg-[#050617] flex flex-wrap justify-center items-center space-x-2 lg:space-x-7 px-1.5 lg:px-0 py-5 gap-y-4"
        variants={logoContainerVariants}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="rounded-lg flex justify-center items-center"
            variants={logoItemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 lg:h-16 w-auto max-w-[11rem] lg:max-w-[11rem] object-contain" // Adjusted width constraints
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default OurPartners;
