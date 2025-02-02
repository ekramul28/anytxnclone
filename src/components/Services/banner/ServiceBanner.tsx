import Header from "@/components/shared/Header";
import Image from "next/image";
import React from "react";

const ServiceBanner = () => {
  return (
    <div className="relative [clip-path:polygon(0%_0%,100%_0%,100%_70%,0%_100%)] bg-gradient-to-r from-[#1B7BEA] to-[#1274e5] min-h-screen flex flex-col justify-center items-center text-white">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Banner Content */}
      <div className="container mx-auto md:flex flex-col md:flex-row items-center justify-between md:px-12 text-center md:text-left relative z-30">
        {/* Left Section */}
        <div className="md:w-1/2 mt-16 md:mt-2">
          <h1 className="text-2xl text-[#00DFE0] mb-6 font-semibold leading-tight">
            Our Service
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Reimagining banking solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            Enabling financial institutions to create unparalleled customer
            experiences.
          </p>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute w-full h-full">
        {/* Image 1 - Positioned at the bottom left */}
        <Image
          src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250223/2_jutk3h.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute bottom-[-10%] left-[-5%] w-auto h-auto"
        />

        {/* Image 2 - Positioned at the bottom right */}
        <Image
          src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250223/3_vrfiql.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute bottom-[-5%] right-[-100%] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default ServiceBanner;
