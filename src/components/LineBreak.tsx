"use client";
import { motion } from "framer-motion";
import { Weapons } from "@/data/LineBreak";
import Image from "next/image";

const LineBreak = () => {
  const weapons = Array(10).fill(Weapons).flat();

  const marqueeAnimation = {
    x: "-50%",
    transition: {
      duration: 50,
      ease: "linear",
      repeat: Infinity,
    },
  };

  return (
    <div className="relative overflow-hidden py-20 whitespace-nowrap">
      <motion.div
        animate={marqueeAnimation}
        className="flex w-max gap-3 whitespace-nowrap"
      >
        {weapons.map(({ photo, name }, index) => (
          <Image key={index} src={photo} alt={name} width={40} height={40} />
        ))}
      </motion.div>
    </div>
  );
};

export default LineBreak;
