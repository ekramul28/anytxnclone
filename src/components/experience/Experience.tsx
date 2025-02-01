"use client";

import React from "react";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <div className="text-center space-y-6 p-6 mt-6 container mx-auto">
      <h1 className="text-[#0F6BD5] text-4xl  font-bold">
        TRUSTED BY THE BEST
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {/* Years of Experience */}
        <div className="p-4 bg-white  rounded-md">
          <h1 className="text-6xl font-bold text-[#0F6BD5]">
            &gt;
            <CountUp className="text-6xl" start={0} end={20} duration={2.5} />
          </h1>
          <h2 className="text-gray-600 text-2xl font-bold">
            Years of Experience
          </h2>
        </div>

        {/* Financial Institutions */}
        <div className="p-4 bg-white  rounded-md">
          <h1 className="text-6xl font-bold text-[#0F6BD5]">
            <CountUp className="text-6xl" start={0} end={40} duration={2.5} />+
          </h1>
          <h2 className="text-gray-600">Financial Institutions</h2>
        </div>

        {/* Customers */}
        <div className="p-4 bg-white  rounded-md">
          <h1 className="text-6xl font-bold text-[#0F6BD5]">
            &gt;
            <CountUp
              className="text-6xl"
              start={123466}
              end={200}
              duration={3}
            />
            M
          </h1>
          <h2 className="text-gray-600">Customers Each</h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
