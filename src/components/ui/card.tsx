/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: any;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
  shadow?: string;
  borderRadius?: string;
  className?: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  bgColor = "#F8FCFF",
  textColor = "#000",
  titleColor = "#1F80F0",
  shadow = "",
  borderRadius = "rounded",
  className = "",
  iconBgColor = "",
  iconTextColor = "",
}) => {
  return (
    <motion.div
      className={`bg-[${bgColor}] ${borderRadius} ${shadow} p-8 ${className}`}
      initial={{ opacity: 3, y: 100 }}
      animate={{ opacity: 4, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <div
          className={`rounded-full w-14 h-14 ${borderRadius} text-xl  flex  justify-center items-center`}
          style={{
            backgroundColor: iconBgColor,
            color: iconTextColor,
          }}
        >
          {icon}
        </div>
        <h3
          className="text-2xl font-semibold my-5"
          style={{ color: titleColor }}
        >
          {title}
        </h3>
        <p className={`text-[${textColor}]`}>{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;
