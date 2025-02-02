import { links } from "@/Link/CompanyLink";
import Image from "next/image";
import React from "react";

const Company: React.FC = () => {
  return (
    <div className="py-8 container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {links.slice(0, 15).map((link, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              height={200}
              width={200}
              src={link}
              alt={`Company logo ${index + 1}`}
              className="max-w-[100px] md:max-w-[150px] lg:max-w-[180px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company;
