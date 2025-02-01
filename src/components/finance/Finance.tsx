"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const carouselData = [
  {
    title: "Innovation",
    description: "Pushing the boundaries of technology.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format",
  },
  {
    title: "Design",
    description: "Crafting beautiful and user-friendly experiences.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format",
  },
  {
    title: "Performance",
    description: "Delivering high-speed, optimized solutions.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format",
  },
  {
    title: "Security",
    description: "Ensuring safety and data privacy for all users.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1600&auto=format",
  },
];

const FinanceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Auto move every 3 seconds

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="w-full container mx-auto text-center space-y-6">
      {/* Titles with Active Highlight */}
      <div className="flex justify-center gap-4">
        {carouselData.map((item, index) => (
          <span
            key={index}
            className={`text-lg font-semibold transition-all ${
              index === currentIndex ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {item.title}
          </span>
        ))}
      </div>

      {/* Card Container */}
      <div className="relative flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative w-80 p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={carouselData[currentIndex].image}
              width={200}
              height={100}
              alt={carouselData[currentIndex].title}
              className="mx-auto rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">
              {carouselData[currentIndex].title}
            </h3>
            <p className="mt-2 text-gray-600">
              {carouselData[currentIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinanceCarousel;
