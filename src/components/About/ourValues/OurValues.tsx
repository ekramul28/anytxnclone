"use client";
import React from "react";
import { FaLightbulb, FaRegSmileBeam, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "@/components/ui/card";

const cardData = [
  {
    id: 1,
    icon: <FaRegSmileBeam />,
    iconBgColor: "#D7F8F9",
    title: "Driven",
    description:
      "Motivated by a desire for change, we empower our customers by tenaciously striving for breakthroughs in financial services.",
  },
  {
    id: 2,
    icon: <FaUserAlt />,
    iconBgColor: "#FFE2D4",
    title: "agile",
    description:
      "Our agility helps us stay one step ahead, where we embrace change and swiftly adapt in order to deliver cutting-edge solutions.",
  },
  {
    id: 3,
    icon: <FaLightbulb />,
    iconBgColor: "#E8F2FE",
    title: "global",
    description:
      "We think beyond borders, with a commitment to creating financial technological solutions that empower banks and financial institutions across the world.",
  },
  {
    id: 4,
    icon: <FaLightbulb />,
    iconBgColor: "#E8F2FE",
    title: "open",
    description:
      "In a world of possibilities, our openness leads us to discover new ideas, fostering creativity and inspiring transformative solutions.",
  },
];

const OurValues = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8"
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

export default OurValues;
