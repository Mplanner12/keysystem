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

const processContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const processCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const OurProcess: React.FC = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      className="w-full bg-gradient-to-tr from-[#03020A] via-[#020106] to-[#03020A] text-white py-16 px-6 md:px-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-2"
        variants={textItemVariants}
      >
        Our Process
      </motion.h2>
      <motion.p
        className="text-md text-[#BBBBBB] text-center mb-10"
        variants={textItemVariants}
      >
        At KeySystem, we leave you with a lasting impression.
      </motion.p>
      <motion.div
        className="w-full flex flex-col items-center justify-start mb-2.5 gap-y-6"
        variants={processContainerVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="w-full bg-gradient-to-r from-[#04050B] via-[#04050B] to-[#181B4D] rounded-lg p-3 lg:p-0 lg:pl-10 flex justify-between items-center overflow-hidden"
          variants={processCardVariants}
        >
          <div className="flex flex-col lg:min-w-lg justify-start items-start gap-y-3.5">
            <h3 className="text-4xl font-bold mb-2">Strategic Consultation</h3>
            <p className="text-start lg:text-lg lg:max-w-md">
              We kick off with a strategic consultation to understand your
              brand, goals, and audience.
            </p>
          </div>
          {/* Image container within card */}
          <motion.div
            className="flex justify-end items-end w-full h-full"
            variants={imageVariants}
          >
            <img
              alt="illustration"
              src="/illustration1.png"
              className="lg:w-[51%]"
            />
          </motion.div>
        </motion.div>

        {/* Grid for Cards 2 & 3 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Card 2 */}
          <motion.div
            className="w-full bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-lg p-3 lg:p-0 lg:pt-9 lg:pl-10 flex justify-between items-start overflow-hidden"
            variants={processCardVariants}
          >
            <div className="w-fit flex flex-col min-w-[15rem] xl:min-w-[18rem] 2xl:min-w-[21rem] justify-start items-start gap-y-2 mb-9">
              <h3 className="text-4xl font-bold mb-2">Collaboration</h3>
              <p className="text-start text-lg w-full min-w-[15rem] xl:min-w-[17.85rem] 2xl:min-w-[21rem]">
                At KeySystem, we collaborate closely to ensure the end result
                meets your expectations and makes you happy.
              </p>
            </div>
            <motion.div
              className="flex justify-end items-end w-full h-full"
              variants={imageVariants}
            >
              <img
                alt="illustration"
                src="/illustration3.png"
                className="rotate-[270]"
              />
            </motion.div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="w-full bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-lg lg:pl-10 p-3 lg:p-0 lg:pt-9 flex justify-between items-start overflow-hidden"
            variants={processCardVariants}
          >
            <div className="w-full flex flex-col min-w-[15rem] xl:min-w-[18rem] 2xl:min-w-[21rem] justify-start items-start gap-y-2 mb-9">
              <h3 className="text-4xl font-bold mb-2">Delivery</h3>
              <p className="text-start text-lg w-full min-w-[15rem] xl:min-w-[17.85rem] 2xl:min-w-[21rem]">
                Our delivery rate is 100%; our clients deserve nothing less.
              </p>
            </div>
            <motion.div
              className="flex justify-end items-end w-full h-full"
              variants={imageVariants}
            >
              <img alt="illustration" src="/illustration2.png" className="" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default OurProcess;
