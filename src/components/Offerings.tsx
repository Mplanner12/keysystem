import React from "react";
import { RxCursorArrow } from "react-icons/rx";

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

const cardVariants = [
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

const OfferingCard = ({ text, variant }: { text: string; variant: string }) => (
  <div
    className={`w-[10rem] h-[5.5rem] sm:w-[11rem] sm:h-[5.8rem] md:w-[11.85rem] md:h-[6rem] 
    rounded-full px-3 py-2 sm:px-4 
    bg-gradient-to-br ${variant} 
    text-white text-xs sm:text-sm text-center shadow-md hover:scale-105 transition-transform duration-300 
    cursor-pointer flex flex-col justify-center items-center`}
  >
    <span className="">{text}</span>
    <RxCursorArrow className="text-[#3131b6] mt-1" size={14} />
  </div>
);

const Offerings = () => {
  return (
    // Keep overall padding responsive
    <div className="w-full bg-[#000017] text-white py-16 px-6 md:px-20">
      {/* Text Section - Adjust text sizes and max-width for mobile */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Our Offerings
        </h2>
        <p className="text-sm sm:text-base md:text-lg mx-auto mb-6 max-w-xs sm:max-w-md md:max-w-[40rem] tracking-wider">
          Leverage KeySystem’s cutting-edge expertise to transform your
          business. Our tailored software and cybersecurity solutions drive
          efficiency, security, and growth. We empower businesses to thrive in
          the digital age
        </p>
        {/* Button styling remains consistent */}
        <button className="mt-4 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-3 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out text-sm sm:text-base">
          Learn more
        </button>
      </div>

      {/* Offerings Grid - Responsive Columns and Spacing */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-x-5 md:gap-y-2 max-w-sm sm:max-w-md md:max-w-[42.5rem] mx-auto place-items-center">
        {offerings.map((item, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              index % 3 === 1 ? "md:mt-12" : ""
            }`}
          >
            <OfferingCard text={item} variant={cardVariants[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
