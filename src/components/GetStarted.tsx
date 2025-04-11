/* eslint-disable @next/next/no-img-element */
import React from "react";

const GetStarted: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-tl from-[#05071E] via-[#05071E] to-[#111A89] flex items-center justify-center py-12 lg:py-20 text-white px-4 sm:px-6 md:px-10 lg:px-36">
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#030517] via-[#030517] to-[#181B4D] flex flex-col lg:flex-row lg:justify-between rounded-2xl overflow-hidden shadow-xl">
        {/* Text Content Area */}
        <div className="w-full flex flex-col justify-center p-6 lg:pb-5 lg:pt-8 lg:pl-14 pr-0 text-center lg:text-left lg:max-w-[54rem] tracking-wide lg:tracking-widest">
          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
            Ready to get started?
          </h1>
          <h2 className="text-lg lg:text-xl text-[#BBBBBB] mb-4 mt-3">
            Shoot us a Mail
          </h2>
          <p className="mb-4 text-base lg:text-[1.1rem]">
            Join numerous corporations, organizations, and businesses as they
            scale their teams, tap into new market opportunities, and build
            innovative products with KeySystem Technology.
          </p>
          <p className="text-base lg:text-[1.1rem]">
            Join thousands of students who are ready to learn new skills or take
            their career to the next level by enrolling in one of our training
            programs today.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="flex mt-8 lg:mt-16 items-center bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 text-white font-bold rounded-full px-6 py-4 cursor-pointer border-2 border-blue-400 backdrop-blur-xl hover:border-blue-600 hover:bg-white hover:text-black hover:scale-105 transition duration-300 ease-in-out text-sm sm:text-base">
              Send Us a Mail Now
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <img
            className="h-full rounded-tr-2xl rounded-br-2xl object-cover"
            src="/bow-radiant-llu.png"
            alt="Abstract blue and orange radiant graphic"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
