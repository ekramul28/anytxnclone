import ReuseableCovering2 from "@/components/ui/reuseAbleCovering2";
import React from "react";

const WhatWeDo = () => {
  return (
    <div>
      <ReuseableCovering2
        title="What We Do"
        subtitle="The power of data"
        description="In today's rapidly evolving financial landscape, banks and financial institutions face unprecedented challenges. At AnyTech, we understand the critical need for continuous innovation and strategic decision-making in order to thrive."
        additionalDescription="With our global perspective and cutting-edge solutions, we are here to help you create unparalleled customer experiences that will set you apart from the competition. Embark on a journey of transformation with AnyTech—one that will redefine what’s possible for your institution."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/df3fa35d203ad1fc9b3515af8205cabd45cd20e5-1020x1097.png?w=1020&auto=format"
        imageAlt="cover"
        imageWidth={500}
        imageHeight={500}
        backgroundImage="https://example.com/background.jpg"
        graphicalElements={[
          {
            src: "https://i.postimg.cc/dVzkSpBf/finance-logo-1.png",
            alt: "Image 1",
            className:
              "w-20 h-20 ml-6 -mt-14 rounded-full shadow-xl animate-slow-bounce",
          },
          {
            src: "https://i.postimg.cc/dVzkSpBf/finance-logo-1.png",
            alt: "Image 2",
            className:
              "w-20 h-20 mr-10 mt-40 rounded-full shadow-xl animate-slow-bounce",
          },
          {
            src: "https://i.postimg.cc/dVzkSpBf/finance-logo-1.png",
            alt: "Image 3",
            className:
              "w-28 h-28 ml-60 -mt-6 rounded-full shadow-xl animate-slow-bounce",
          },
          {
            src: "/2.svg",
            alt: "Graphical Element 2",
            className: "w-28 h-28 -ml-[100%] mt-[90%]",
          },
          {
            src: "/3.svg",
            alt: "Graphical Element 3",
            className: "w-40 h-72 ml-24 -mt-24",
          },
        ]}
        textColor="#1F80F0"
        bgColor="#F8FCFF"
      />
    </div>
  );
};

export default WhatWeDo;
