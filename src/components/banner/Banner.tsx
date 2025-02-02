import React from "react";
import Header from "../shared/Header";
import Button from "../ui/button";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r  from-[#1B7BEA] to-[#1274e5] min-h-screen flex flex-col justify-center items-center text-white">
      {/* Background Image with Clip-path */}
      <div className="absolute inset-0  hidden md:block w-full h-full z-10 overflow-hidden">
        <figure className="relative w-full h-full [clip-path:polygon(84%_0%,100%_0%,100%_100%,0%_100%)]">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&auto=format"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="object-cover "
          />
        </figure>
      </div>

      {/* Blue Gradient Overlay on the Left Half */}
      {/* <div className="absolute inset-0 left-0 bg-gradient-to-r from-[#1274e5] to-transparent z-20" /> */}

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Banner Content */}
      <div className="container mx-auto md:flex flex-col md:flex-row items-center justify-between md:px-12 text-center md:text-left relative z-30">
        {/* Left Section */}
        <div className="md:w-1/2 mt-16 md:mt-2">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Embrace the future of finance
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </p>
          <Button className="mt-6 bg-orange-500 flex items-center px-6 py-3 rounded-lg hover:bg-orange-400 transition-all duration-500">
            Reach Out to Us <BiChevronRight className="ml-2 text-2xl" />
          </Button>
        </div>

        {/* Small-Screen Image (Only visible on mobile) */}
        <div className="md:w-1/2 w-full h-full block md:hidden mt-8">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&auto=format"
            alt="Mobile Background"
            width={400} // Set width
            height={400} // Set height
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
