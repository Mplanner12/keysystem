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

const imageContainerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.4,
    },
  },
};

const Trust: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="w-full h-[50rem] lg:h-[55rem] bg-gradient-to-b from-[#05071E] to-[#05071E] text-white relative overflow-hidden mb-0 pt-14"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="meshPattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#meshPattern)" />
        </svg>
      </div>
      <div className="max-w-5xl mx-auto text-center px-4 md:px-10 relative z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          variants={textItemVariants}
        >
          Why we are{" "}
          <span className="whitespace-nowrap"> your Trusted Consultant</span>
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-[#BBBBBB] mb-6"
          variants={textItemVariants}
        >
          Empowering Businesses with Cutting-edge Technology
        </motion.p>
        <motion.p
          className="text-lg md:text-2xl leading-relaxed text-[#D2D2D2] max-w-[51rem] mx-auto mb-10"
          variants={textItemVariants}
        >
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </motion.p>
        <motion.p
          className="text-lg text-[#D2D2D2] mb-3 tracking-wide"
          variants={textItemVariants}
        >
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </motion.p>
        <div className="flex justify-center w-full">
          <motion.div
            className="max-w-[53rem] h-[19rem] lg:h-[30rem] absolute mx-auto rounded-2xl overflow-hidden shadow-lg flex justify-center items-center
    before:absolute before:inset-0 before:z-0 before: zbg-gradient-to-r before:from-[#05071E]/50 before:via-blue-500/30 before:to-[#05071E]/50 before:blur-xl
    after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:via-blue-500/20 after:to-transparent after:blur-xl"
            variants={imageContainerVariants}
          >
            <motion.img
              src="image2.png"
              alt="Consulting Team"
              className="w-full h-full object-contain relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Trust;
