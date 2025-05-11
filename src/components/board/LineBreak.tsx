"use client";
import { motion } from "framer-motion";
import { Weapons } from "@/data/LineBreak";
import Image from "next/image";

const LineBreak = () => {
  const repeatedWeapons = Array(5).fill(Weapons).flat();

  const marqueeAnimation = {
    animate: { x: "-50%" },
    transition: {
      duration: 10,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  };

  return (
    <div className="relative overflow-hidden py-20 whitespace-nowrap">
      <motion.div
        {...marqueeAnimation}
        className="flex w-max gap-3 whitespace-nowrap"
      >
        {[...repeatedWeapons, ...repeatedWeapons].map(
          ({ photo, name }, index) => (
            <Image key={index} src={photo} alt={name} width={40} height={40} />
          ),
        )}
      </motion.div>
    </div>
  );
};

export default LineBreak;
