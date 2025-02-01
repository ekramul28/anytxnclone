import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="py-10 bg-[#002045] ">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
            alt="logo"
            height={32}
            width={200}
          />

          <div className="flex items-center gap-5 text-[#00E9EA]">
            <h1 className="border-r-2 border-gray-400 pr-4">Our Solutions</h1>
            <div className="flex flex-col md:flex-row gap-3">
              <Link href="/">AnyCaaS</Link>
              <Link href="/">AnyBaaS</Link>
              <Link href="/">AnyPaaS</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" bg-[#00152D]">
        <div className="container mx-auto flex justify-between items-center px-6 py-6">
          <h1 className="text-[#1F80F0]">
            ©2025 All rights reserved. Md Ekramul Haque.
          </h1>
          <h1 className="text-[#1F80F0] cursor-pointer hover:underline">
            Privacy Policy
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
