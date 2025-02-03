import ReuseableCovering2 from "@/components/ui/reuseAbleCovering2";
import React from "react";

const Implement = () => {
  return (
    <div>
      <ReuseableCovering2
        title="seamless execution"
        subtitle="Implement"
        description="Ensuring sustainable success stems from the ability to seamlessly execute your digital transformation strategies.

Combining deep technological expertise and a proven track record, we design and implement custom solutions for financial institutions that drive long-term success."
        additionalDescription="Partner with AnyTech to bring new capabilities faster to market and accelerate revenue generation, increase operational efficiency and enhance the overall customer experience."
        imageSrc="https://cdn.sanity.io/images/6jywt20u/production/5a83471ce74af85f2e6df7366317403779473423-1002x1023.png?w=1002&auto=format"
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

export default Implement;
