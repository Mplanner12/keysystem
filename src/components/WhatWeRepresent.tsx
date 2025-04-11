/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatWeRepresent = () => {
  return (
    <section className="bg-[#000017] text-white px-6 py-16 md:px-20 w-full">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What we Represent
        </h2>
        <p className="text-md text-[#BBBBBB] mb-6 max-w-md mx-auto">
          Our relentless pursuit of excellence is the driving force behind our
          success
        </p>
        <p className="px-2.5 lg:px-0 text-[1.05rem] text-[#D2D2D2] text-start lg:text-center max-w-[48rem] mx-auto">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
          legacy, and we are proud to carry it forward. Watch the video to see
          how we are innovating to keep businesses on top of their games.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
        {/* Vision Card */}
        <div className="bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] border border-blue-400/30 rounded-xl p-6 text-left">
          <img
            src="/robin.png"
            alt="Target icon"
            className="w-52 h-52 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 text-white">Our Vision</h3>
          <p className="text-sm text-gray-300">
            To be the trusted partner for businesses seeking to leverage
            technology to improve decision-making, unlock new opportunities, and
            achieve transformative growth
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] border border-blue-400/30 rounded-xl p-6 text-left">
          <img
            src="/magnifier.png"
            alt="Magnifying glass icon"
            className="w-52 h-52 mx-auto mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 text-white">Our Mission</h3>
          <p className="text-sm text-gray-300">
            We bridge the gap between technology and business, delivering
            customized ICT solutions that drive efficiency, growth, and
            competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeRepresent;
