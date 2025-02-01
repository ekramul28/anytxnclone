import React from "react";
import { FaLightbulb, FaRegSmileBeam, FaUserAlt } from "react-icons/fa";
const cardData = [
  {
    id: 1,
    icon: <FaRegSmileBeam className="text-[#1F80F0] text-4xl mb-4" />,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    id: 2,
    icon: <FaUserAlt className="text-[#1F80F0] text-4xl mb-4" />,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    id: 3,
    icon: <FaLightbulb className="text-[#1F80F0] text-4xl mb-4" />,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];
const HumanCentredCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {cardData?.map(({ id, icon, title, description }) => (
          <div key={id} className="bg-[#F8FCFF] p-8 ">
            <div className="">{icon}</div>
            <h3 className="text-2xl font-semibold my-5 ">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanCentredCard;
