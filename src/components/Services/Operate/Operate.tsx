import ReuseableCovering from "@/components/ui/reuseableCovering";
import React from "react";
import { FaLightbulb } from "react-icons/fa";

const Operate = () => {
  return (
    <div>
      <ReuseableCovering
        title="long-term efficiency"
        subtitle="Operate"
        description="Setting up operational efficiencies to deliver the promised value to your customers is pivotal to long-term growth.

We provide a full suite of operational and support services that continue throughout the product life cycle."
        additionalDescription="Continually drive success with our dedicated experts who are ready to assist you at every step of the way."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/60924eb07b75e8432610c0ba14db5bfa20f8b0c9-1002x1023.png?w=1002&auto=format"
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

export default Operate;
