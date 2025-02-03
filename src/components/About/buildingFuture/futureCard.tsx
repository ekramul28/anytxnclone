"use client";
import React from "react";
import { FaLightbulb, FaRegSmileBeam, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";

const descriptionFor2 = (
  <>
    Empowering more than{" "}
    <span className="font-bold">40 financial institutions</span> to transform in
    a digital-first world, our innovative platform enables banks and financial
    institutions to develop customer-centric financial products and offerings.
  </>
);

const cardData = [
  {
    id: 1,
    icon: <FaRegSmileBeam />,
    iconBgColor: "#D7F8F9",
    title: "Experts in technology and finance",
    description:
      "With our team's deep expertise in the finance and tech sectors, we are catalysts for change, paving the way for innovation and strategic reorientation, shaping the future of finance",
  },
  {
    id: 2,
    icon: <FaUserAlt />,
    iconBgColor: "#FFE2D4",
    title: "Empowerment through technology",
    description: descriptionFor2,
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    iconBgColor: "#E8F2FE",
    title: "Understanding evolving needs",
    description:
      "By staying at the forefront of technology and understanding the evolving needs of the industry, we strive to provide cutting-edge solutions that drive efficiency, enhance user experiences, and enable financial inclusion.",
  },
];

const FutureCard = () => {
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
      {cardData.map(({ id, icon, title, description, iconBgColor }) => (
        <Card
          key={id}
          icon={icon}
          iconBgColor={iconBgColor}
          title={title}
          description={description}
          className="bg-white "
          bgColor="none"
          shadow="none"
          borderRadius="none"
        />
      ))}
    </motion.div>
  );
};

export default FutureCard;
