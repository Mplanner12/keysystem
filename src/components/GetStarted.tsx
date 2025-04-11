/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out cubic bezier
      staggerChildren: 0.15, // Stagger children within the card
      delayChildren: 0.4, // Delay children animation start
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5, // Delay image slightly more
      ease: "easeOut",
    },
  },
};

const GetStarted: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="relative w-full bg-gradient-to-tl from-[#05071E] via-[#05071E] to-[#111A89] flex items-center justify-center py-12 lg:py-20 text-white px-4 sm:px-6 md:px-10 lg:px-36 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div
        className="w-full max-w-6xl bg-gradient-to-r from-[#030517] via-[#030517] to-[#181B4D] flex flex-col lg:flex-row lg:justify-between rounded-2xl overflow-hidden shadow-xl"
        variants={cardVariants}
      >
        <motion.div className="w-full flex flex-col justify-center p-6 lg:pb-5 lg:pt-8 lg:pl-14 pr-0 text-center lg:text-left lg:max-w-[54rem] tracking-wide lg:tracking-widest">
          <motion.h1
            className="text-3xl lg:text-5xl font-bold mb-2"
            variants={textItemVariants}
          >
            Ready to get started?
          </motion.h1>
          <motion.h2
            className="text-lg lg:text-xl text-[#BBBBBB] mb-4 mt-3"
            variants={textItemVariants}
          >
            Shoot us a Mail
          </motion.h2>
          <motion.p
            className="mb-4 text-base lg:text-[1.1rem]"
            variants={textItemVariants}
          >
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities, and build
            innovative products with KeySystem Technology.
          </motion.p>
          <motion.p
            className="text-base lg:text-[1.1rem]"
            variants={textItemVariants}
          >
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </motion.p>
          <motion.div
            className="flex justify-center lg:justify-start"
            variants={textItemVariants}
          >
            <motion.button
              className="flex mt-8 lg:mt-16 items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-4 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black transition duration-300 ease-in-out text-sm sm:text-base"
              whileHover={{ scale: 1.05, borderColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
            >
              Send Us a Mail Now
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex lg:justify-end"
          variants={imageVariants}
        >
          <img
            className="h-full rounded-tr-2xl rounded-br-2xl object-cover"
            src="/bow-radiant-llu.png"
            alt="Abstract blue and orange radiant graphic"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default GetStarted;
