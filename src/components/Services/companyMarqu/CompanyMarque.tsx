import { links } from "@/Link/CompanyLink";
import Image from "next/image";
import React from "react";

const CompanyMarquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative w-full bg-gray-100 py-4">
      <div className="flex gap-6 animate-marquee">
        {links.map((src, index) => (
          <Image
            height={200}
            width={200}
            key={index}
            src={src}
            alt={`marquee-img-${index}`}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyMarquee;
