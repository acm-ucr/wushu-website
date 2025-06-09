"use client";
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
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

const LocationAndTime = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-full flex-col rounded-md p-5 md:flex-row md:p-8 lg:flex-row lg:p-10">
      <div className="flex w-2/3 flex-col justify-items-center gap-1 rounded-md md:p-5 lg:p-10">
        <motion.div
          variants={DownUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          <Header title="LOCATION AND TIME" isRed={false} />
        </motion.div>
        <motion.div
          variants={UpDown}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          <div className="bg-wushu-gold-100 mt-9">
            <Image
              src="/images/who_we_are/location_and_times_img.webp"
              alt="Location and Times (shows club participants all participating in an activity)"
              width={3000}
              height={3000}
              className="translate-x-5 -translate-y-5"
            />
          </div>
        </motion.div>
      </div>
      <div className="text-wushu-red-100 font-arimo lg:3xl flex w-full flex-col justify-center pt-7 pl-4 text-lg tracking-tighter md:w-3/5 md:pt-10 md:text-2xl lg:w-2/5 lg:pt-10">
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          <h2 className="lg:40 pt-2 md:pt-10">
            We hold wushu practices twice a week from fall to spring quarter at
            the UCR gym.
          </h2>
        </motion.div>
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.1}
        >
          <h2 className="pt-5">When?</h2>
        </motion.div>
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.1}
        >
          <h2> Wednesday 4:00 - 6:00 PM </h2>
        </motion.div>
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.1}
        >
          <h2> Sunday 5:00 - 7:00 PM </h2>
        </motion.div>
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.2}
        >
          <h2 className="pt-5">Where?</h2>
        </motion.div>
        <motion.div
          variants={fade}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.3}
        >
          <h2> SRC North, MPR B (subject to change) </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default LocationAndTime;
