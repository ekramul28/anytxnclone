import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  titleColor?: string;
  shadow?: string;
  borderRadius?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  bgColor = "#F8FCFF",
  textColor = "#000",
  titleColor = "#1F80F0",
  shadow = "shadow-lg",
  borderRadius = "rounded-lg",
  className = "",
}) => {
  return (
    <motion.div
      className={`bg-[${bgColor}] ${borderRadius} ${shadow} p-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={`text-[${titleColor}] text-4xl mb-4`}>{icon}</div>
      <h3 className="text-2xl font-semibold my-5" style={{ color: titleColor }}>
        {title}
      </h3>
      <p className={`text-[${textColor}]`}>{description}</p>
    </motion.div>
  );
};

export default Card;
