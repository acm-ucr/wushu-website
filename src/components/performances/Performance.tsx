"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface PerformanceProps {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  imageOnLeft: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Performance = ({
  imageSrc,
  title,
  date,
  description,
  imageOnLeft = false,
}: PerformanceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mt-15 flex items-center sm:mt-20 md:mt-30 md:flex-row ${
        imageOnLeft
          ? "flex md:flex-row"
          : "flex-row-reverse md:flex-row-reverse"
      }`}
    >
      <div className="flex w-full justify-center px-6 sm:px-10 md:w-1/2 md:px-14">
        <img
          src={imageSrc}
          alt={title}
          className="min-h-sm w-full max-w-xs object-contain sm:max-w-md md:max-w-full"
        />
      </div>
      <div className="w-full px-1 text-left sm:px-6 md:w-1/2 md:px-14">
        <div className="text-wushu-red-100 font-arimo text-sm font-bold italic sm:text-lg">
          {title}
        </div>
        <div className="text-wushu-red-100 font-arimo text-xs italic sm:text-sm">
          {date}
        </div>
        <div className="text-wushu-red-100 font-arimo mt-4 text-xs sm:mt-5 sm:text-base">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

export default Performance;
