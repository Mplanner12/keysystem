"use client";
import React, { useRef } from "react";
import { RxCursorArrow } from "react-icons/rx";
import { motion, useInView } from "framer-motion";

const offerings = [
  "Core banking services",
  "Staff augmentation solutions",
  "Business Intelligence",
  "Digital Banking & financial inclusion",
  "Internal audit solutions",
  "KeySystem software testing",
  "Online/mobile lending solution",
  "Data Warehouse",
  "Cybersecurity Solutions",
];

const cardVariantsGradients = [
  "from-[#0A3440E3] to-[#05071EA6]",
  "from-[#0A0E40E3] to-[#05071EA6]",
  "from-[#400A3AE3] to-[#05071EA1]",
  "from-[#0D400AE3] to-[#05071EA6]",
  "from-[#40330AE3] to-[#40330AE3]",
  "from-[#4A8C2BE3] to-[#05071EA6]",
  "from-[#400A0AE3] to-[#400A0AE3]",
  "from-[#05071EA6] to-[#3CA3BAE3]",
  "from-[#6012CEB8] to-[#05071EA6]",
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const gridContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const OfferingCard = ({ text, variant }: { text: string; variant: string }) => (
  <motion.div
    className={`w-[10rem] h-[5.5rem] sm:w-[11rem] sm:h-[5.8rem] md:w-[11.85rem] md:h-[6rem]
    rounded-full px-3 py-2 sm:px-4
    bg-gradient-to-br ${variant}
    text-white text-xs sm:text-sm text-center shadow-md
    cursor-pointer flex flex-col justify-center items-center
    hover:scale-105 transition-transform duration-300 ease-in-out`}
    variants={cardItemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="">{text}</span>
    <RxCursorArrow className="text-[#3131b6] mt-1" size={14} />
  </motion.div>
);

const Offerings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="w-full bg-[#000017] text-white py-16 px-6 md:px-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="text-center mb-10 md:mb-12">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
          variants={textItemVariants}
        >
          Our Offerings
        </motion.h2>
        <motion.p
          className="text-sm sm:text-base md:text-lg mx-auto mb-6 max-w-xs sm:max-w-md md:max-w-[40rem] tracking-wider"
          variants={textItemVariants}
        >
          Leverage KeySystem’s cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </motion.p>
        <motion.button
          className="mt-4 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-3 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black transition duration-300 ease-in-out text-sm sm:text-base"
          variants={textItemVariants}
          whileHover={{ scale: 1.05, borderColor: "#2563EB" }}
          whileTap={{ scale: 0.95 }}
        >
          Learn more
        </motion.button>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-x-5 md:gap-y-2 max-w-sm sm:max-w-md md:max-w-[42.5rem] mx-auto place-items-center"
        variants={gridContainerVariants}
      >
        {offerings.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index % 3 === 1 ? "md:mt-12" : ""
            }`}
          >
            <OfferingCard
              text={item}
              variant={
                cardVariantsGradients[index % cardVariantsGradients.length]
              }
            />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Offerings;
