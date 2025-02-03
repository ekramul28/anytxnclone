import ReuseableCovering2 from "@/components/ui/reuseAbleCovering2";
import React from "react";

const Operate = () => {
  return (
    <div>
      <ReuseableCovering2
        title="long-term efficiency"
        subtitle="Operate"
        description="Setting up operational efficiencies to deliver the promised value to your customers is pivotal to long-term growth.
 
 We provide a full suite of operational and support services that continue throughout the product life cycle."
        additionalDescription="Continually drive success with our dedicated experts who are ready to assist you at every step of the way."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/60924eb07b75e8432610c0ba14db5bfa20f8b0c9-1002x1023.png?w=1002&auto=format"
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

export default Operate;
