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

const cardGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
  hover: {
    y: -5,
    boxShadow: "0px 10px 30px rgba(0, 100, 255, 0.2)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const WhatWeRepresent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.section
      ref={ref}
      className="bg-[#000017] text-white px-6 py-16 md:px-20 w-full overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={textItemVariants}
        >
          What we Represent
        </motion.h2>
        <motion.p
          className="text-md text-[#BBBBBB] mb-6 max-w-md mx-auto"
          variants={textItemVariants}
        >
          Our relentless pursuit of excellence is the driving force behind our
          success
        </motion.p>
        <motion.p
          className="px-2.5 lg:px-0 text-[1.05rem] text-[#D2D2D2] text-start lg:text-center max-w-[48rem] mx-auto"
          variants={textItemVariants}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward. Watch the video to see
          how we are innovating to keep businesses on top of their games.
        </motion.p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
        variants={cardGridVariants}
      >
        <motion.div
          className="bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] border border-blue-400/30 rounded-xl p-6 text-left"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src="/robin.png"
            alt="Target icon"
            className="w-52 h-52 mx-auto mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
          />
          <h3 className="text-2xl font-bold mb-2 text-white">Our Vision</h3>
          <p className="text-sm text-gray-300">
            To be the trusted partner for businesses seeking to leverage
            technology to improve decision-making, unlock new opportunities, and
            achieve transformative growth
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] border border-blue-400/30 rounded-xl p-6 text-left"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.img
            src="/magnifier.png"
            alt="Magnifying glass icon"
            className="w-52 h-52 mx-auto mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
          />
          <h3 className="text-2xl font-bold mb-2 text-white">Our Mission</h3>
          <p className="text-sm text-gray-300">
            We bridge the gap between technology and business, delivering
            customized ICT solutions that drive efficiency, growth, and
            competitive advantage.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhatWeRepresent;
