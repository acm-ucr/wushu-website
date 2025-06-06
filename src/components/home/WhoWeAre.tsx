"use client";
import React from "react";
import Image from "next/image";
import Header from "../Header";
import { motion } from "framer-motion";

const UpDown = {
  initial: { opacity: 0, x: 20, y: -20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom,
    },
  }),
};

const DownUp = {
  initial: { opacity: 0, x: -20, y: -20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom,
    },
  }),
};

const fade = {
  initial: { opacity: 0, y: -20 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: custom,
    },
  }),
};

const WhoWeAre = () => {
  return (
    <div className="flex w-full flex-col content-start gap-1 p-10 md:flex-row lg:flex-row">
      <div className="flex w-2/3 flex-col items-center">
        <div>
          <motion.div
            variants={DownUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            <Header title="WHO WE ARE" isRed={true} />
          </motion.div>
          <motion.div
            variants={UpDown}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            <div className="bg-wushu-red-200 mt-9">
              {/* <motion.div
              variants={animation}
              initial = "initial"
              whileInView= "animate"
              viewport={{once: true, amount: 0.5}}
              custom={0}
            >  */}
              <Image
                src="/images/who_we_are/who_we_are_img.webp"
                alt="Who We Are"
                width={585}
                height={575}
                priority
                className="translate-x-5 -translate-y-5"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full flex-col md:w-2/3 md:pr-6 md:pl-10 lg:w-2/3 lg:pr-6 lg:pl-10">
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          <h2 className="text-wushu-gold-100 font-arimo pb-1 text-lg font-bold md:pt-8 md:text-xl lg:pt-16 lg:text-4xl">
            WHAT IS WUSHU?
          </h2>
          <h3 className="text-wushu-red-100 font-arimo text-md tracking-tighter md:text-xl lg:text-3xl">
            Here at Wushu At UCR, we aim to provide a fun environment where
            members can learn, practice, and prepare to compete in wushu. Wushu
            is a Chinese martial art that encompasses many aspects, but we
            specifically do just forms and not sparring or combat. We also do
            performances for various events around campus if you’d like to see
            us in action!
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;
