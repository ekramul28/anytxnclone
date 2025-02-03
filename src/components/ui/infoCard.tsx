import Button from "@/components/ui/button";
import React from "react";

interface InfoCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  bgColor?: string;
  textClass?: string;
  descriptionClass?: string;
  buttonColor?: string;
  bgImages?: string[];
  height?: string;
  width?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  bgColor,
  textClass,
  descriptionClass,
  buttonColor,
  bgImages = [],
  height = "auto",
  width = "90%",
}) => {
  const bgImage = bgImages.length > 0 ? bgImages.join(", ") : undefined;

  return (
    <div
      className={`flex justify-between items-center p-8  mt-7 rounded-lg shadow-lg mx-auto`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height,
        width,
      }}
    >
      <div>
        <h2 className={` font-bold ${textClass}`}>{title}</h2>
        <p className={`mt-3 ${descriptionClass}`}>{description}</p>
      </div>
      <div>
        <Button className="font-bold" style={{ backgroundColor: buttonColor }}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default InfoCard;
