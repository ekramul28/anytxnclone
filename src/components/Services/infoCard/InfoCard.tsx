import Button from "@/components/ui/button";
import React from "react";

const InfoCard = () => {
  return (
    <div className="flex justify-between items-center  p-8 mt-7 bg-[#1876E4] text-white rounded-lg shadow-lg w-[80%] mx-auto">
      <div>
        <h2 className="text-3xl font-bold">Your Title Here</h2>
        <p className="mt-3 text-lg">
          This is a description where you can explain more details about your
          content.
        </p>
      </div>
      <div>
        <Button>Click Me</Button>
      </div>
    </div>
  );
};

export default InfoCard;
