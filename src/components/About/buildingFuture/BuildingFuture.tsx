import ReuseableCovering from "@/components/ui/reuseableCovering";
import React from "react";
import { FaLightbulb } from "react-icons/fa";

const BuildingFuture = () => {
  const title = (
    <>
      Building the{" "}
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        future
      </span>{" "}
      today
    </>
  );
  return (
    <div>
      <ReuseableCovering
        subtitle="OUR STORY"
        title={title}
        description="Founded in January 2020, Any Technology is a Singapore-based fintech enterprise committed to helping the global financial services industry reimagine banking and payment services."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/45215835736396e2687121e2610eca30b0a8ca2a-2121x1414.jpg?w=1600&auto=format"
        imageAlt="cover"
        imageWidth={500}
        imageHeight={500}
        icon={<FaLightbulb />}
        backgroundImage="https://path-to-your-background-image.jpg" // Set the background image URL
        textColor="#1F80F0"
        bgColor="#F8FCFF"
      />
    </div>
  );
};

export default BuildingFuture;
