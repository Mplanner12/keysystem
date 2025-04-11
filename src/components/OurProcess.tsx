/* eslint-disable @next/next/no-img-element */
import React from "react";

const OurProcess: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-[#03020A] via-[#020106] to-[#03020A] text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Our Process
      </h2>
      <p className="text-md text-[#BBBBBB] text-center mb-10">
        At KeySystem, we leave you with a lasting impression.
      </p>
      <div className="w-full flex flex-col items-center justify-start mb-2.5 gap-y-6">
        <div className="w-full bg-gradient-to-r from-[#04050B] via-[#04050B] to-[#181B4D] rounded-lg p-3 lg:p-0 lg:pl-10 flex justify-between items-center">
          <div className="flex flex-col lg:min-w-lg justify-start items-start gap-y-3.5">
            <h3 className="text-4xl font-bold mb-2">Strategic Consultation</h3>
            <p className="text-start lg:text-lg lg:max-w-md">
              We kick off with a strategic consultation to understand your
              brand, goals, and audience.
            </p>
          </div>
          <div className="flex justify-end items-end w-full h-full">
            <img
              alt="illustration"
              src="/illustration1.png"
              className="lg:w-[51%]"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="w-full bg-gradient-to-r from-[#04050B]  to-[#181B4D] rounded-lg p-3 lg:p-0 lg:pt-9 lg:pl-10 flex justify-between items-start">
            <div className="w-fit flex flex-col min-w-[15rem] xl:min-w-[18rem] 2xl:min-w-[21rem] justify-start items-start gap-y-2 mb-9">
              <h3 className="text-4xl font-bold mb-2">Collaboration</h3>
              <p className="text-start text-lg w-full min-w-[15rem] xl:min-w-[17.85rem] 2xl:min-w-[21rem]">
                At KeySystem, we collaborate closely to ensure the end result
                meets your expectations and makes you happy.
              </p>
            </div>
            <div className="flex justify-end items-end w-full h-full">
              <img
                alt="illustration"
                src="/illustration3.png"
                className="rotate-[270]"
              />
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-[#04050B] to-[#181B4D] rounded-lg lg:pl-10 p-3 lg:p-0 lg:pt-9 flex justify-between items-start">
            <div className="w-full flex flex-col min-w-[15rem] xl:min-w-[18rem] 2xl:min-w-[21rem] justify-start items-start gap-y-2 mb-9">
              <h3 className="text-4xl font-bold mb-2">Delivery</h3>
              <p className="text-start text-lg w-full min-w-[15rem] xl:min-w-[17.85rem] 2xl:min-w-[21rem]">
                Our delivery rate is 100%; our clients deserve nothing less.
              </p>
            </div>
            <div className="flex justify-end items-end w-full h-full">
              <img alt="illustration" src="/illustration2.png" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
