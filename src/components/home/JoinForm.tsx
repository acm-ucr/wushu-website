"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { motion } from "motion/react";

const JoinForm = () => {
  return (
    <div className="justify-left w-full flex-col px-10 lg:px-25">
      <motion.div
        initial={{ opacity: 0, y: -20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 20 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Header title="HOW TO JOIN" isRed={true} />
      </motion.div>
      <div className="text-wushu-red-100 text-md mt-3 mb-2 max-w-md text-left md:mt-6 md:text-xl lg:mt-6 lg:mb-5 lg:text-2xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            We are open to people of all experience levels, whether you have no
            experience or years of experience!
          </div>
          <div>
            To join, feel free to just show up to our designated practice times.
            Please join our Discord as well if you'd like up-to-date practice
            details or follow our Instagram. We have a nice community on Discord
            where you can chat or learn more about Wushu!
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Link
          href="https://discord.gg/xvCtPYCBcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="ring-wushu-gold-100 bg-wushu-white-100 hover:bg-wushu-red-200 text-wushu-red-100 text-md mb-48 block w-fit rounded-xl px-6 pt-5 pb-4 text-center font-bold ring-4 transition duration-300 hover:text-white md:mb-2 md:text-xl lg:mb-2 lg:text-2xl"
        >
          JOIN OUR DISCORD HERE!
        </Link>
      </motion.div>
    </div>
  );
};

export default JoinForm;
