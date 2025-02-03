import React from "react";
import Header from "../shared/Header";
import Button from "../ui/button";
import { BiChevronRight } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="relative  animated-bg min-h-screen flex flex-col md:flex-row text-white bg-gradient-to-r from-[#1B7BEA] to-[#1274e5]">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>
      <div className="gradient-background absolute left-72 clip-path-image animate-slideInFromLeft w-1/3"></div>

      {/* Left Content Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-start px-6 md:px-12 text-center md:text-left relative z-30">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Embrace the Future of Finance
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-lg">
          Reimagine financial services with AnyTech’s open platform, distributed
          banking solution that powers transformation.
        </p>
        <Button className="mt-6 bg-orange-500 flex items-center px-6 py-3 rounded-lg hover:bg-orange-400 transition-all duration-500">
          Reach Out to Us <BiChevronRight className="ml-2 text-2xl" />
        </Button>
      </div>

      {/* Right Image Section with Clip-Path */}
      {/* <div className="md:w-1/2 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B7BEA] to-[#1274e5] opacity-60"></div>
        <div className="h-full w-full overflow-hidden ">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&auto=format"
            alt="Finance Illustration"
            fill
            className="object-cover h-full w-full "
          />
        </div>
      </div> */}
    </section>
  );
};

export default Banner;
