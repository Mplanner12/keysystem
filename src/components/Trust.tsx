/* eslint-disable @next/next/no-img-element */
import React from "react";

const Trust: React.FC = () => {
  return (
    <section className="w-full h-[50rem] lg:h-[55rem] bg-gradient-to-b from-[#05071E] to-[#05071E] text-white relative overflow-hidden mb-0 pt-14">
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
      <div className="max-w-5xl mx-auto text-center px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Why we are{" "}
          <span className="whitespace-nowrap"> your Trusted Consultant</span>
        </h1>
        <p className="text-sm md:text-base text-[#BBBBBB] mb-6">
          Empowering Businesses with Cutting-edge Technology
        </p>
        <p className="text-lg md:text-2xl leading-relaxed text-[#D2D2D2] max-w-[51rem] mx-auto mb-10">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward.
        </p>
        <p className="text-lg text-[#D2D2D2] mb-3 tracking-wide">
          Watch the video to see how we are innovating to keep businesses on top
          of their games.
        </p>
        <div className="flex justify-center w-full">
          <div
            className="max-w-[53rem] h-[19rem] lg:h-[30rem] absolute mx-auto rounded-2xl overflow-hidden shadow-lg flex justify-center items-center 
    before:absolute before:inset-0 before:z-0 before:bg-gradient-to-r before:from-[#05071E]/50 before:via-blue-500/30 before:to-[#05071E]/50 before:blur-xl
    after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:via-blue-500/20 after:to-transparent after:blur-xl"
          >
            <img
              src="image2.png"
              alt="Consulting Team"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
