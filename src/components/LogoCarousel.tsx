/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const logos = [
  { src: "sterling-logo.png", alt: "Sterling" },
  { src: "crusader-sterling-logo.png", alt: "Crusader Sterling" },
  { src: "naf-logo.png", alt: "NAFC" },
  { src: "nbf-logo.png", alt: "NBF" },
  { src: "military-pensions-logo.png", alt: "Military Pensions Board" },
  { src: "stanbic-bank-logo.png", alt: "Stanbic Bank" },
  { src: "bankmuscat-logo.png", alt: "Bank Muscat" },
];

const LogoCarousel: React.FC = () => {
  return (
    <div className="bg-[#0a0a0a] py-8 pt-12 lg:pt-8 mb-0 lg:mb-28 w-full">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-24"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center h-full w-full"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
