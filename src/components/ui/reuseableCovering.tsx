/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { ReactNode } from "react";

interface UncoveringProps {
  title: any;
  subtitle: string;
  description: string;
  additionalDescription?: string;
  imageSrc: string;
  imageAlt: string;
  icon: ReactNode;
  backgroundImage: string;
  imageWidth?: number;
  imageHeight?: number;
  textColor?: string;
  bgColor?: string;
}

const ReuseableCovering: React.FC<UncoveringProps> = ({
  title,
  subtitle,
  description,
  additionalDescription,
  imageSrc,
  imageAlt,
  icon,
  backgroundImage,
  imageWidth = 300,
  imageHeight = 400,
  textColor = "#1F80F0",
  bgColor = "#F8FCFF",
}) => {
  return (
    <div
      className={`relative flex container mx-auto flex-col md:flex-row items-center justify-between gap-8 p-8 ${bgColor}`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -1 }}
      />

      {/* Left Content (Text) */}
      <div className="flex-1 space-y-6">
        <div className="text-center md:text-left">
          <p
            className="text-lg font-semibold tracking-wide"
            style={{ color: textColor }}
          >
            {subtitle}
          </p>
          <h1 className="text-5xl md:text-5xl font-bold mt-2">{title}</h1>

          <p className="mt-4 text-lg font-semibold">{description}</p>
          {additionalDescription && (
            <p className="mt-2 text-lg text-gray-400">
              {additionalDescription}
            </p>
          )}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="rounded-lg shadow-lg"
        />

        {/* Icon with absolute positioning */}
        <div className="absolute top-4 left-4 text-4xl text-[#1F80F0]">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ReuseableCovering;
