import InfoCard from "@/components/ui/infoCard";
import React from "react";

const OurMission = () => {
  return (
    <div>
      <InfoCard
        title="Our Mission"
        description=" To redefine global finance by empowering
institutions with technology that drives value 
and growth."
        bgColor="#014AB8"
        textClass="text-[#00DFE0] "
        descriptionClass="font-bold text-5xl text-white "
        // bgImages={[
        //   "https://example.com/image1.jpg",
        //   "https://example.com/image2.jpg",
        //   "https://example.com/image3.jpg",
        // ]}
        height="300px"
      />
    </div>
  );
};

export default OurMission;
