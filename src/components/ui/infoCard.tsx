import Button from "@/components/ui/button";
import React from "react";

interface InfoCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  bgImages?: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  bgColor,
  textColor,
  buttonColor,
  bgImages = [],
}) => {
  const bgImage = bgImages.length > 0 ? bgImages.join(", ") : undefined;

  return (
    <div
      className={`flex justify-between items-center p-8 mt-7 rounded-lg shadow-lg w-[80%] mx-auto`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h2 className={`text-3xl font-bold text-${textColor}`}>{title}</h2>
        <p className={`mt-3 text-lg text-${textColor}`}>{description}</p>
      </div>
      <div>
        <Button className="font-bold " style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;
