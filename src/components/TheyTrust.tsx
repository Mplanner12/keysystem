/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "sterling-logo.png", alt: "Sterling" },
  { src: "crusader-sterling-logo.png", alt: "Crusader Sterling" },
  { src: "naf-logo.png", alt: "NAFC" },
  { src: "nbf-logo.png", alt: "NBF" },
  { src: "military-pensions-logo.png", alt: "Military Pensions Board" },
  { src: "stanbic-bank-logo.png", alt: "Stanbic Bank" },
  { src: "bankmuscat-logo.png", alt: "Bank Muscat" },
  { src: "lapo-logo.png", alt: "LAPO" },
  { src: "banke-logo.png", alt: "Banke" },
  { src: "NPF-logo.png", alt: "NPF" },
  { src: "santander-logo.png", alt: "Santander" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TheyTrustUs: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#03020A] via-[#020106] to-[#03020A] py-16 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">They Trust Us</h2>
      <p className="text-[0.935rem] mt-7 text-white font-[400] mb-14">
        And so can you
      </p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3.5 gap-x-7 max-w-[56rem] mx-auto"
      >
        {logos.map((logo, index) => {
          const isLastOddRow =
            logos.length % 4 !== 0 &&
            index >= logos.length - (logos.length % 4) &&
            logos.length > 4;

          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`w-full ${
                isLastOddRow ? "relative lg:left-[35.5%]" : ""
              }`}
            >
              <div className="rounded shadow-md flex items-center justify-center h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default TheyTrustUs;
