import { links } from "@/Link/CompanyLink";
import Image from "next/image";
import React from "react";

interface MarqueeProps {
  speed?: string;
  bgColor?: string;
  className?: string;
}

const CompanyMarquee: React.FC<MarqueeProps> = ({
  speed = "animate-marquee",
  className = "",
}) => {
  return (
    <div
      className={`overflow-hidden whitespace-nowrap relative w-full  ${className}`} // Manually merge classes here
    >
      <div className={`flex gap-10 py-4 ${speed}`}>
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
