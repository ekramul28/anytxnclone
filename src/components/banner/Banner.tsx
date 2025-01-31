import React from "react";
import Header from "../shared/Header";
import Button from "../ui/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-blue-950 to-blue-800 flex flex-col items-center justify-center text-white">
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

      {/* Banner Content */}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          The Future of Financial Innovation
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Unlock seamless transactions with cutting-edge technology designed for
          a better future.
        </p>
        <Button className="mt-6 bg-orange-500 hover:bg-orange-400 transition-all duration-500">
          Get Started
        </Button>
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

      {/* Main Centered Illustration */}
      <div className="absolute bottom-0 md:bottom-[-50px] w-full flex justify-center">
        <Image
          src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250227/content-image-1_jsnidb.png"
          alt="Illustration"
          width={700}
          height={500}
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default Banner;
