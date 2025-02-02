/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";

interface SolutionCardProps {
  title: string;
  titleClassName?: string; // Dynamic class for title
  description: string;
  image: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  titleClassName = "", // Default to empty string
  description,
  image,
}) => {
  const boldStartIndex = description.indexOf("Our");
  const boldEndIndex = description.indexOf(")") + 1; // Include ")"

  let beforeBold = description;
  let afterBold = "";

  if (
    boldStartIndex !== -1 &&
    boldEndIndex !== -1 &&
    boldStartIndex < boldEndIndex
  ) {
    // Split description into before and after the bold section
    beforeBold = description.slice(0, boldStartIndex);
    afterBold = description.slice(boldEndIndex);
  }

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 max-w-sm">
      <h3 className={`text-xl font-semibold mt-4 ${titleClassName}`}>
        {title}
      </h3>
      <div className="flex items-center">
        <h1 className="font-bold mr-2">BY</h1>
        <Image
          height={20}
          width={20}
          src={image}
          alt={title}
          className="w-20 h-20 rounded-lg"
        />
      </div>
      <p className="mt-2 text-gray-600">
        {beforeBold}
        <strong>{description.slice(boldStartIndex, boldEndIndex)}</strong>{" "}
        {/* Make the bold part */}
        {afterBold}
      </p>
    </div>
  );
};

export default SolutionCard;
