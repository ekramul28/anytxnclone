import React from "react";
import { FaLightbulb } from "react-icons/fa";
import ReuseableCovering from "../ui/reuseableCovering";

const Uncovering = () => {
  return (
    <div>
      <ReuseableCovering
        title="Uncovering new ways to delight customers"
        subtitle="Powering The Future of Finance"
        description="AnyTech is revolutionizing financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services."
        additionalDescription="Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
        imageAlt="cover"
        imageWidth={960}
        imageHeight={1364}
        icon={<FaLightbulb />}
        backgroundImage="https://path-to-your-background-image.jpg" // Set the background image URL
        textColor="#1F80F0"
        bgColor="#F8FCFF"
      />
    </div>
  );
};

export default Uncovering;
