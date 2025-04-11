/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full text-white py-16 relative overflow-hidden flex flex-col justify-start items-center">
      {/* Top Left Mesh Pattern */}
      <div className="absolute top-[6%] left-[10.5%] w-1/3 h-1/3 z-0">
        <svg
          className="w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="topLeftMesh"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* First row */}
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="0"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              {/* Second row */}
              <rect
                x="0"
                y="100"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="100"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              {/* Grid lines */}
              <path
                d="M 100 0 L 100 200 M 0 100 L 200 100"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topLeftMesh)" />
        </svg>
      </div>
      {/* Bottom Right Mesh Pattern - Use similar pattern with different ID */}
      <div className="absolute bottom-[40%] right-[10%] w-1/3 h-1/3 z-0">
        <svg
          className="w-full h-full opacity-20"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="bottomRightMesh"
              x="0"
              y="0"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              {/* First row */}
              <rect
                x="0"
                y="0"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="0"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              {/* Second row */}
              <rect
                x="0"
                y="100"
                width="100"
                height="100"
                fill="#4A5568"
                fillOpacity="0.3"
              />
              <rect
                x="100"
                y="100"
                width="100"
                height="100"
                fill="#05071E"
                fillOpacity="0.3"
              />
              {/* Grid lines */}
              <path
                d="M 100 0 L 100 200 M 0 100 L 200 100"
                fill="none"
                stroke="#4A5568"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bottomRightMesh)" />
        </svg>
      </div>
      {/* Content */}
      <div className="bg-[#2E6D9C] text-white border border-white px-3.5 py-1.5 flex justify-center items-center rounded-full font-[400] text-[0.95rem]">
        Welcome to KeySystem{" "}
      </div>{" "}
      <h1 className="text-6xl max-w-2xl font-bold text-white text-center mt-7">
        IT Consulting for <br /> Forward-thinking Businesses
      </h1>
      <p className="text-xl text-gray-300 text-center mt-4 tracking-wide">
        Driving Digital Transformation, One Solution at a Time
      </p>
      <div className="flex space-x-4 mt-10 mb-16">
        <button className="flex items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-3 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out">
          Get Started
        </button>
        <button className="px-6 py-3 cursor-pointer text-white border-2 border-blue-500 backdrop-blur-xl rounded-full hover:bg-blue-600 hover:text-black hover:scale-105">
          Learn More
        </button>
      </div>
      <div className="flex justify-center mb-2 w-full">
        <img src="vector-stroke.png" alt="" className="w-full" />
        {/* Image */}
        <div className="max-w-4xl absolute mx-auto rounded-2xl overflow-hidden shadow-lg">
          <img
            src="image1.png"
            alt="Consulting Team"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
