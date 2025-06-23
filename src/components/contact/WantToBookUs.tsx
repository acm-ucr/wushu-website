"use client";
import Link from "next/link";
import Image from "next/image";
import GroupPhoto from "@/public/images/contact_us/want_to_book_us.webp";
import WushuLogo from "@/public/logos/wushufront.svg";
import Header from "@/components/Header";
import { motion } from "motion/react";

const email = `mailto:wushu.ucriverside@gmail.com?subject=${encodeURIComponent(
  "Wushu Performance Request",
)}&body=${encodeURIComponent(`Hi Wushu club,

We would like you to perform at our event! Here are some details:
Organization: 
Event: 
Date & time: 
Location: 
Other details: 

Thank you!`)}`;

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const WantToBookUs = () => {
  return (
    <div className="mx-10 mt-10 text-center md:mx-24 md:text-left">
      <motion.div
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <Header title="WANT TO BOOK US?" isRed={true} />
      </motion.div>

      <div className="flex flex-col md:flex-row">
        <motion.div
          variants={slideInBottom}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="font-arimo text-wushu-red-100 mr-7 pt-10 text-sm md:mr-8 md:w-md md:text-2xl">
            We love to perform for school events as well as off-campus
            organizations! We’ve performed for APSP, ASPB, CSA, NSU, and more on
            campus, as well as for the Rancho Cucamonga Lunar New Year Festival
            off-campus. Please email us with a time, location, and any other
            logistical details about the event! We perform for free and our
            performances are usually within 10 minutes of runtime.
          </div>
        </motion.div>

        <motion.div
          variants={slideInBottom}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={GroupPhoto}
            alt="Wushu Group Photo"
            className="w-full pt-10"
          />
        </motion.div>
      </div>
      <motion.div
        variants={slideInBottom}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-80 justify-center pt-10 md:mt-0"
        >
          <Link
            href={email}
            className="border-wushu-gold-100 group-hover:bg-wushu-red-200 flex h-45 w-80 items-center justify-center rounded-2xl border-6 bg-white transition-colors duration-300"
          >
            <Image
              src={WushuLogo}
              alt="Wushu Logo"
              className="h-40 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <div className="text-wushu-red-100 font-amaranth flex w-64 text-left text-4xl font-bold group-hover:text-white">
              Email Us!
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WantToBookUs;
