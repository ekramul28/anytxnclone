"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const carouselData = [
  {
    title: "Customer focused",
    titleOfProduct: "Purpose-built financial services",
    description2:
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    description:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format",
  },
  {
    title: "Agile and adaptable",
    titleOfProduct: "Agile and adaptable for growth",
    description:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
    description2:
      "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format",
  },
  {
    title: "compliance ready",
    titleOfProduct: "Manage compliance with ease",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format",
  },
  {
    title: "Secure and safe",
    titleOfProduct: "Highly secure and safe",
    description:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
    description2:
      "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format",
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
    <div className="w-full container mx-auto text-center space-y-6 px-4 sm:px-6 md:px-8">
      {/* Titles with Active Highlight */}
      <h1 className="text-[#1F80F0] mt-7 text-2xl sm:text-3xl md:text-4xl">
        TECHNOLOGY BUILT FOR YOU
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        The future of finance
      </h1>
      <div className="flex justify-center gap-8 flex-wrap">
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
            className="relative p-6 bg-white shadow-lg rounded-lg h-[450px] sm:h-[500px] md:h-[500px] w-[90%] sm:w-[80%] md:w-[90%]"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row md:p-9 p-4 gap-6">
              <div className="w-full sm:w-1/2 text-start  flex-1 order-2 lg:order-1">
                <h3 className="md:mt-4 text-xl font-bold text-[#1F80F0]">
                  {carouselData[currentIndex].title}
                </h3>

                <h3 className="md:mt-6 text-xl font-bold">
                  {carouselData[currentIndex].titleOfProduct}
                </h3>
                <p className="md:mt-2 text-black font-semibold">
                  {carouselData[currentIndex].description}
                </p>
                <p className="md:mt-4 text-gray-600 hidden lg:block">
                  {carouselData[currentIndex].description2}
                </p>
              </div>
              <div className="w-full sm:w-1/2 flex-1 order-1 lg:order-2">
                <Image
                  src={carouselData[currentIndex].image}
                  width={500}
                  height={500}
                  alt={carouselData[currentIndex].title}
                  className="mx-auto rounded-lg h-[100px] md:h-[300px]  object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FinanceCarousel;
