"use client";
import { useRef } from "react";
import Image from "next/image";
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
      className={`mt-16 flex flex-row items-center justify-center gap-x-[5%] sm:gap-x-10 md:gap-x-16 lg:gap-x-[20%] ${imageOnLeft ? "" : "flex-row-reverse"}`}
    >
      <div
        className={`relative aspect-[5/3] w-[45%] max-w-xs sm:max-w-sm md:max-w-md ${
          imageOnLeft
            ? "-translate-x-[4%] md:translate-x-[4%] lg:translate-x-[20%]"
            : "translate-x-[4%] md:-translate-x-[4%] lg:-translate-x-[20%]"
        } transition-transform duration-500`}
      >
        <Image src={imageSrc} alt={title} fill className="object-contain" />
      </div>

      <div className="w-[45%] px-2 text-left sm:px-6 md:w-[55%] lg:w-[40%]">
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
