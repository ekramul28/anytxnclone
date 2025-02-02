import ReuseableCovering from "@/components/ui/reuseableCovering";
import React from "react";
import { FaLightbulb } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div>
      <ReuseableCovering
        title="What We Do"
        subtitle="The power of data"
        description="In today's rapidly evolving financial landscape, banks and financial institutions face unprecedented challenges. At AnyTech, we understand the critical need for continuous innovation and strategic decision-making in order to thrive."
        additionalDescription="With our global perspective and cutting-edge solutions, we are here to help you create unparalleled customer experiences that will set you apart from the competition. Embark on a journey of transformation with AnyTech—one that will redefine what’s possible for your institution."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=1020&auto=format"
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

export default WhatWeDo;
