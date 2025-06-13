"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import photo1 from "@/public/images/meet_the_board/meet_the_board.webp";

const slideInVariant = {
  initial: { opacity: 0, x: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: "backInOut",
    },
  }),
};

const MeetTheBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row">
      <motion.div
        className="w-full md:w-1/2"
        variants={slideInVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        custom={0}
      >
        <Image
          src={photo1}
          alt="Wushu Board Group Photo"
          width={600}
          height={500}
          priority
          className="border-wushu-gold-100 w-full rounded-lg border-4 shadow-lg"
        />
      </motion.div>

      <div className="w-full justify-center md:w-1/2">
        <motion.div
          custom={0.15}
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-wushu-gold-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
        >
          MEET THE
        </motion.div>
        <motion.div
          custom={0.3}
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-wushu-gold-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
        >
          2024–2025
        </motion.div>
        <motion.div
          custom={0.45}
          variants={slideInVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          className="text-wushu-gold-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
        >
          BOARD
        </motion.div>
      </div>
    </div>
  );
};

export default MeetTheBoard;
