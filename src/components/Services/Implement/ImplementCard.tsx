"use client";
import React from "react";
import { FaLightbulb, FaRegSmileBeam, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";

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

const ImplementCard = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {
          opacity: 0,
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {cardData.map(({ id, icon, title, description }) => (
        <Card
          key={id}
          icon={icon}
          title={title}
          description={description}
          className="transition-all duration-300 ease-in-out bg-white border hover:bg-slate-300"
        />
      ))}
    </motion.div>
  );
};

export default ImplementCard;
