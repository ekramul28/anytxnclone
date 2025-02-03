import DynamickBanner from "@/components/ui/dynamickBanner";
import React from "react";

const ContactBanner = () => {
  const gradient = (
    <div
      style={{
        background: `radial-gradient(300.77% 113.48% at 0% 99.92%, 
          #00DFE0 15.56%, 
          #1CC117 25.98%, 
          #1F82E7 40%), 
          #1F80F0`,
        clipPath: "polygon(0 80%, 100% 57%, 100% 65%, 0 100%)",
        width: "100%",
        height: "140vh",
        position: "absolute",
      }}
    ></div>
  );
  return (
    <>
      <DynamickBanner
        title="Contact US"
        subtitle="Let’s
talk"
        description="Have questions about building the next 
generation of banking experiences, our 
pricing, or our customer success stories?"
        gradient={gradient}
      />
    </>
  );
};

export default ContactBanner;
