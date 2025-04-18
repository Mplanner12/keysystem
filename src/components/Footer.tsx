/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1, // Stagger children within the column
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.footer
      ref={ref}
      className="w-full bg-[#0D0D1C] text-white px-6 py-12 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div
          className="grid md:grid-cols-3 gap-7 md:gap-8"
          variants={columnVariants} // Apply column variants to the grid container
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div variants={itemVariants}>
              <img src="key-logo.png" alt="KeySystem Logo" />
            </motion.div>
            <motion.p
              className="text-[0.8rem] text-gray-400"
              variants={itemVariants}
            >
              © 2025 KeySystem Technology Limited. All rights reserved.
            </motion.p>
          </motion.div>
          <motion.div className="mt-0.5 lg:mt-7" variants={columnVariants}>
            <motion.h3
              className="font-bold text-xl mb-4"
              variants={itemVariants}
            >
              SERVICES
            </motion.h3>
            <ul className="space-y-3.5 text-sm text-[#CFCFCF]">
              <motion.li variants={itemVariants}>Core refresh</motion.li>
              <motion.li variants={itemVariants}>
                Application management services
              </motion.li>
              <motion.li variants={itemVariants}>
                Evolution & enhancement services
              </motion.li>
              <motion.li variants={itemVariants}>
                Solution Assurance & validation
              </motion.li>
              <motion.li variants={itemVariants}>
                Digital Banking & financial inclusion
              </motion.li>
              <motion.li variants={itemVariants}>
                Online/mobile lending solution
              </motion.li>
            </ul>
          </motion.div>
          <motion.div className="mt-0.5 lg:mt-7" variants={columnVariants}>
            <ul className="space-y-3.5 text-sm text-[#CFCFCF] mt-0.5 lg:mt-[44px]">
              <motion.li variants={itemVariants}>
                Staff augmentation solutions
              </motion.li>
              <motion.li variants={itemVariants}>
                Risk management & Internal audit solutions
              </motion.li>
              <motion.li variants={itemVariants}>
                Data Warehouse & Business Intelligence (BI)
              </motion.li>
              <motion.li variants={itemVariants}>
                Enterprise Document Management Solutions
              </motion.li>
              <motion.li variants={itemVariants}>
                KeySystem software testing
              </motion.li>
              <motion.li variants={itemVariants}>
                Cybersecurity Solutions
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={columnVariants}
        >
          <motion.div variants={columnVariants}>
            <motion.h3
              className="font-bold text-xl mb-4"
              variants={itemVariants}
            >
              QUICK LINKS
            </motion.h3>
            <ul className="space-y-2 text-sm text-[#CFCFCF] flex flex-col">
              <motion.a
                className="hover:text-blue-400"
                href="#"
                variants={itemVariants}
                whileHover={{ x: 5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                About Us
              </motion.a>
              <motion.a
                className="hover:text-blue-400"
                href="#"
                variants={itemVariants}
                whileHover={{ x: 5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Sitemap
              </motion.a>
            </ul>
          </motion.div>
          <motion.div className="text-[#CFCFCF]" variants={columnVariants}>
            <motion.h3
              className="font-bold text-xl mb-2 text-white"
              variants={itemVariants}
            >
              CONTACT
            </motion.h3>
            <motion.p className="font-semibold" variants={itemVariants}>
              Nigeria
            </motion.p>
            <motion.p variants={itemVariants}>
              55G Adebisi Omotola Close,
              <br />
              Off Samuel Adedoyin Street,
              <br />
              Victoria Island
            </motion.p>
          </motion.div>
          <motion.div
            className="pt-3 md:pt-0 mt-2 lg:mt-10 text-[#CFCFCF]"
            variants={columnVariants}
          >
            <motion.p
              className="font-semibold text-[0.9rem] text-white"
              variants={itemVariants}
            >
              United Kingdom
            </motion.p>
            <motion.p variants={itemVariants}>
              39 Kenyon Lane, Off Moston Lane,
              <br />
              Moston, Manchester,
              <br />
              United Kingdom, M40 9JG
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 lg:relative lg:left-[34.25%] max-w-3xl gap-8 text-sm text-[#CFCFCF]"
          variants={columnVariants}
        >
          <motion.div className="space-y-2.5" variants={itemVariants}>
            <span className="font-semibold text-white">United Kingdom</span>
            <p>Tel: +44 161 948 1444</p>
          </motion.div>
          <motion.div className="space-y-2.5" variants={itemVariants}>
            <span className="font-semibold text-white">
              United Arab Emirates
            </span>
            <p>Tel: +971 50 423 8817</p>
          </motion.div>
          <motion.div className="space-y-2.5" variants={itemVariants}>
            <span className="font-semibold text-white">Canada</span>
            <p>Tel: +1 647 977 1435</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col-reverse md:flex-row justify-start items-center lg:gap-x-[10.8rem] lg:w-full text-sm text-[#CFCFCF]"
          variants={columnVariants}
        >
          <motion.div
            variants={columnVariants}
            className="flex justify-start items-start md:items-center space-x-7 py-4"
          >
            <motion.a
              variants={socialIconVariants}
              href="#"
              aria-label="Instagram"
              className="text-[#333333] hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M12 2.163c3.206 0 3.593.012 4.86.07 1.17.058 1.99.247 2.45.415.56.2 1.01.46 1.46.91.45.45.71.9.91 1.46.168.46.357 1.28.415 2.45.058 1.267.07 1.654.07 4.86s-.012 3.593-.07 4.86c-.058 1.17-.247 1.99-.415 2.45-.2.56-.46 1.01-.91 1.46-.45.45-.9.71-1.46.91-.46.168-1.28.357-2.45.415-1.267.058-1.654.07-4.86.07s-3.593-.012-4.86-.07c-1.17-.058-1.99-.247-2.45-.415-.56-.2-1.01-.46-1.46-.91-.45-.45-.71-.9-.91-1.46-.168-.46-.357-1.28-.415-2.45C2.175 15.756 2.163 15.369 2.163 12s.012-3.593.07-4.86c.058-1.17.247-1.99.415-2.45.2-.56.46-1.01.91-1.46.45-.45.9-.71 1.46-.91.46-.168 1.28-.357 2.45-.415C8.407 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.333.012 7.06.07 5.78.128 4.73.367 3.9.67 2.9.99 2.1 1.79 1.3 2.59.5 3.39.2 4.39.07 5.66.012 6.933 0 7.341 0 12s.012 5.067.07 6.34c.128 1.27.367 2.32.67 3.15.79.8 1.59 1.6 2.59 2.4.99.79 2.04 1.03 3.15 1.3 1.27.128 1.675.07 4.86.07s3.593-.012 4.86-.07c1.11-.27 2.16-.51 3.15-1.3.99-.79 1.79-1.59 2.59-2.4.3-.83.54-1.88.67-3.15.07-1.273.07-1.77.07-6.34s-.012-5.067-.07-6.34c-.128-1.27-.367-2.32-.67-3.15-.79-.8-1.59-1.6-2.59-2.4-.99-.79-2.04-1.03-3.15-1.3C15.675.012 15.267 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5.5-10.162a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              href="#"
              aria-label="X"
              className="text-[#333333] hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M23.77 4.43c-.88.39-1.83.65-2.83.77a4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.1 1.19A4.92 4.92 0 0 0 16.62 2c-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.11 1.14-4.1-.2-7.74-2.17-10.18-5.15-.42.72-.66 1.55-.66 2.43 0 1.68.86 3.16 2.16 4.03a4.92 4.92 0 0 1-2.23-.62v.06c0 2.34 1.66 4.29 3.86 4.73a4.93 4.93 0 0 1-2.22.08c.63 1.96 2.45 3.39 4.6 3.43A9.86 9.86 0 0 1 1 19.54a13.9 13.9 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14 0-.21 0-.42-.02-.63a10.01 10.01 0 0 0 2.46-2.54z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              href="#"
              aria-label="LinkedIn"
              className="text-[#333333] hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M20.447 20.452h-3.539v-5.579c0-1.33-.025-3.042-1.85-3.042-1.85 0-2.136 1.44-2.136 2.92v5.701H10.48V9h3.404v1.55h.049c.475-.9 1.637-1.85 3.367-1.85 3.6 0 4.26 2.37 4.26 5.45v6.25zM5.337 7.5c-1.14 0-2.063.923-2.063 2.063 0 1.14.923 2.063 2.063 2.063 1.14 0 2.063-.923 2.063-2.063 0-1.14-.923-2.063-2.063-2.063zm1.52 12.952H3.817V9h3.04v11.452zM22.225 0H1.775C.794 0 0 .794 0 1.775v20.45C0 23.206.794 24 1.775 24h20.45C23.206 24 24 23.206 24 22.225V1.775C24 .794 23.206 0 22.225 0z" />
              </svg>
            </motion.a>
            <motion.a
              variants={socialIconVariants}
              href="#"
              aria-label="Facebook"
              className="text-[#333333] hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zM12 24h-4.8V12H6V8h1.2V6.4C7.2 4.2 8.8 2 12 2c2.4 0 4.4.2 4.4.2v4.8h-2.4c-2.4 0-2.8 1.2-2.8 2.4V8h4.8l-.8 4h-4V24z" />
              </svg>
            </motion.a>
          </motion.div>
          <motion.div
            className="flex flex-col md:flex-row justify-start md:space-x-14 py-4"
            variants={columnVariants}
          >
            <motion.div
              className="space-y-2.5 mb-4 md:mb-0"
              variants={itemVariants}
            >
              <span className="font-semibold">Nigeria</span>
              <p>Tel: +234 818 444 1404</p>
            </motion.div>
            <motion.div className="pt-0 space-y-2.5" variants={itemVariants}>
              <p className="font-semibold">Email</p>
              <p>enquiries@keysystemltc</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
