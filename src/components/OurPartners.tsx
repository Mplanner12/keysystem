/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurPartners: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[#03020A] via-[#020106] to-[#03020A] text-white py-16">
      <div className="px-6 md:px-20 mb-14">
        <h2 className="text-4xl font-bold text-white text-center mb-3.5">
          Our Partners
        </h2>
        <p className="text-lg text-white text-center mb-10">
          Creating a Synergy with global brands
        </p>
      </div>
      <div className="w-full bg-[#050617] flex justify-center space-x-2 lg:space-x-7 px-1.5 lg:px-0 py-5">
        <div className="rounded-lg">
          <img
            src="/software-group.png"
            alt="SOFTWARE GROUP"
            className="h-14 lg:h-16 lg:w-44"
          />
        </div>
        <div className="rounded-lg">
          <img
            src="/cognizab.png"
            alt="cognizant"
            className="h-14 lg:h-16 lg:w-44"
          />
        </div>
        <div className="rounded-lg">
          <img
            src="/temenos.png"
            alt="temenos"
            className="h-14 lg:h-16 lg:w-44"
          />
        </div>
        <div className="rounded-lg">
          <img
            src="/NETInfo.png"
            alt="NETInfo"
            className="h-14 lg:h-16 lg:w-44"
          />
        </div>
        <div className="rounded-lg">
          <img
            src="/Tech-mahin.png"
            alt="TECH MAHINDRA"
            className="h-14 lg:h-16 lg:w-44"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
