import Button from "@/components/ui/button";
import InfoCard from "@/components/ui/infoCard";
import React from "react";

const ServiceInfoCard = () => {
  return (
    <div>
      <InfoCard
        title="Your Title Here"
        description=" This is a description where you can explain more details about your
          content"
        buttonText="Click me"
        bgColor="#014AB8"
        textColor="white"
        buttonColor="#FE8B53"
        // bgImages={[
        //   "https://example.com/image1.jpg",
        //   "https://example.com/image2.jpg",
        //   "https://example.com/image3.jpg",
        // ]}
      />
    </div>
  );
};

export default ServiceInfoCard;
