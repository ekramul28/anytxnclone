import React from "react";
import Button from "../ui/button";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const ContactUs = () => {
  return (
    <figure className="z-10 [clip-path:polygon(0%_0%,100%_50%,100%_100%,0%_100%)] ">
      <div className="relative h-[500px] bg-[url('https://res.cloudinary.com/dvtdneocc/image/upload/v1738250222/ctaMobileWaveLines_yt6sav.svg')] bg-cover bg-center bg-[#005BC4] text-white py-20 px-6 flex ">
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
        </div>
        <div className="mt-36 ml-20">
          <h1 className="text-5xl font-bold ">Legacy no longer</h1>
          <p className="mt-4 text-xl">
            Talk to us to find out how we can transform your organisation for
            the future.
          </p>
          <Button className="mt-6 bg-orange-500 flex justify-center items-center hover:bg-orange-400 transition-all duration-500">
            Contact to Us <BiChevronRight />
          </Button>
        </div>
      </div>
    </figure>
  );
};

export default ContactUs;
