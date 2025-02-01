import React from "react";
import Button from "../ui/button";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="relative bg-[url('https://res.cloudinary.com/dvtdneocc/image/upload/v1738250222/ctaMobileWaveLines_yt6sav.svg')] bg-cover bg-center bg-[#005BC4] text-white py-20 px-6 flex flex-col items-center text-center">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  opacity-50"></div>

      <div className="mx-auto">
        {/* 3 Layered Images with Hover Effects */}
        <div className="absolute inset-0 flex justify-center gap-4">
          <div className="relative w-1/3 hover:scale-105 transition-transform duration-500">
            <Image
              src="https://res.cloudinary.com/dvtdneocc/image/upload/v1738250219/carousel-image-frame-1_crj0sc.svg"
              alt="Layer 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500"
            />
          </div>
          <div className="relative w-1/3 hover:scale-110 transition-transform duration-500">
            <Image
              src=""
              alt="Layer 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500"
            />
          </div>
          <div className="relative w-1/3 hover:scale-115 transition-transform duration-500">
            <Image
              src=""
              alt="Layer 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Legacy no longer</h1>
          <p className="mt-4 max-w-lg">
            Talk to us to find out how we can transform your organisation for
            the future.
          </p>
          <Button className="mt-6 bg-[#FE8B53] hover:bg-[#fc7a40]">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
