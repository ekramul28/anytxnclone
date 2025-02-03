import DynamickBanner from "@/components/ui/dynamickBanner";
import React from "react";

const AboutBanner = () => {
  const gradient = (
    <div
      style={{
        background: `radial-gradient(300.77% 113.48% at 0% 99.92%, #FE8B53 15.56%, #1F80F0 25.98%, #014AB8 40%), 
          #1F80F0`,
        clipPath: "polygon(0 80%, 100% 57%, 100% 65%, 0 100%)",
        width: "100%",
        height: "130vh",
        position: "absolute",
      }}
    ></div>
  );

  return (
    <>
      <DynamickBanner
        title=" ABOUT US"
        subtitle="Paving the way 
ahead for finance"
        description="We’re building technologies that will power the future of banking and beyond."
        gradient={gradient}
      />
    </>
  );
};

export default AboutBanner;
