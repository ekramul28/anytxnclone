import React from "react";

import ReuseableCovering2 from "../ui/reuseAbleCovering2";

const Uncovering = () => {
  return (
    <div>
      <ReuseableCovering2
        title="Uncovering new ways to delight customers"
        subtitle="Powering The Future of Finance"
        description="AnyTech is revolutionizing financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services."
        additionalDescription="Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
        imageAlt="cover"
        imageWidth={400}
        imageHeight={300}
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

export default Uncovering;
