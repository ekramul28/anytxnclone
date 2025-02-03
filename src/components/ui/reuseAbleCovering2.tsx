import React from "react";
import Image from "next/image"; // Import Next.js Image component

interface UncoveringProps {
  title: string;
  subtitle: string;
  description: string;
  additionalDescription?: string;
  imageSrc: string;
  imageAlt: string;
  backgroundImage: string;
  imageWidth?: number;
  imageHeight?: number;
  textColor?: string;
  bgColor?: string;
  graphicalElements?: { src: string; alt: string; className?: string }[]; // Dynamic graphical elements
}

const ReuseableCovering2: React.FC<UncoveringProps> = ({
  title,
  subtitle,
  description,
  additionalDescription,
  imageSrc,
  imageAlt,
  backgroundImage,
  imageWidth = 300,
  imageHeight = 400,
  textColor = "#1F80F0",
  bgColor = "#F8FCFF",
  graphicalElements = [],
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
        <div className="mx-auto mb-8 md:mb-0 relative">
          {/* Using Next.js Image component */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="w-full md:w-9/12 opacity-90 z-20"
            layout="intrinsic"
          />

          {/* Dynamic Graphical Elements */}
          <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 flex z-0">
            {graphicalElements.map((element, index) => (
              <Image
                key={index}
                src={element.src}
                alt={element.alt}
                className={`${
                  element.className || ""
                } opacity-65 animate-slow-bounce`}
                width={80}
                height={80}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseableCovering2;
