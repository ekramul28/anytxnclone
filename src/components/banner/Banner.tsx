import React from "react";
import Header from "../shared/Header";
import Button from "../ui/button";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Container from "../shared/Contenar";

const Banner = () => {
  return (
    <figure className="z-10 [clip-path:polygon(0%_0%,100%_0%,100%_90%,0%_100%)]">
      <div className="relative h-[115vh] w-full overflow-hidden bg-gradient-to-r from-blue-950 to-blue-800 flex flex-col  justify-center text-white">
        {/* Header - Absolute Position */}
        <div className="absolute top-0 left-0 w-full z-20">
          <Header />
        </div>

        {/* Background Full-Width Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250222/WaveLinesDesktop2_fogjdl.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-20"
          />
        </div>

        {/* Floating Decorative Background Images */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between opacity-30">
          <Image
            src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250222/ctaMobileWaveLines_yt6sav.svg"
            alt="Background Shape 1"
            width={500}
            height={400}
            className="animate-float"
          />
          <Image
            src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250227/content-image-1_jsnidb.png"
            alt="Background Shape 2"
            width={500}
            height={400}
            className="animate-float"
          />
        </div>

        {/* Banner Content */}
        <div className="relative container mx-auto z-20 px-4 text-center md:text-left">
          {/* Left Section */}
          <div className=" w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold">
              Embrace the future of finance
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Reimagine financial services with AnyTech’s open platform,
              distributed banking solution that powers transformation.
            </p>
            <Button className="mt-6 bg-orange-500 flex justify-center items-center hover:bg-orange-400 transition-all duration-500">
              Reach Out to Us <BiChevronRight />
            </Button>
          </div>
          <div className=" w-1/2"></div>
        </div>

        {/* Right Section (Image with Clip Path) */}
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 z-10">
          <figure className="z-10 [clip-path:polygon(60%_0%,100%_0%,100%_100%,0%_100%)]">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=640&auto=format"
              alt="Illustration"
              width={700}
              height={500}
              className="w-full h-[115vh] object-cover"
            />
          </figure>
        </div>
      </div>
    </figure>
  );
};

export default Banner;
