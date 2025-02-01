import Image from "next/image";
import React from "react";

const links = [
  "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png",
  "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png",
  "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png",
  "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png",
  "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png",
  "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png",
  "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg",
  "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png",
  "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png",
  "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
  "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png",
  "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png",
];

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
