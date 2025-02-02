import ReuseableCovering from "@/components/ui/reuseableCovering";
import React from "react";
import { FaLightbulb } from "react-icons/fa";

const Implement = () => {
  return (
    <div>
      <ReuseableCovering
        title="seamless execution"
        subtitle="Implement"
        description="Ensuring sustainable success stems from the ability to seamlessly execute your digital transformation strategies.

Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success."
        additionalDescription="Partner with AnyTech to bring new capabilities faster to market and accelerate revenue generation, increase operational efficiency and enhance the overall customer experience."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/5a83471ce74af85f2e6df7366317403779473423-1002x1023.png?w=1002&auto=format"
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

export default Implement;
