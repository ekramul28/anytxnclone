import Image from "next/image";
import React from "react";

const Uncovering = () => {
  return (
    <div className="flex container mx-auto flex-col md:flex-row items-center justify-between gap-8 p-8">
      {/* Left Content (SVG & Text) */}
      <div className="flex-1 space-y-6">
        {/* Text Content */}
        <div className=" text-center md:text-left">
          <p className="text-lg font-semibold uppercase tracking-wide">
            Powering The Future of Finance
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">
            Uncovering new ways to delight customers
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            AnyTech is revolutionizing financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="mt-2 text-lg text-gray-300">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
          height={400}
          width={300}
          alt="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Uncovering;
