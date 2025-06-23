"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import wushuContactPic from "@/public/images/contact_us/contact_us.webp";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-wushu-cream flex flex-col items-center justify-center gap-10 px-4 py-10 md:flex-row md:px-20">
      <div className="w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className=""
        >
          <Image
            src={wushuContactPic}
            alt="Wushu Club Contact"
            className="ring-wushu-gold-200 w-full rounded-lg shadow-lg ring-4"
            priority
          />
        </motion.div>
      </div>

      <div className="text-wushu-gold-100 w-full md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className=""
        >
          <Header title="CONTACT US" isRed={false} />
        </motion.div>
        <div className="mt-5 space-y-3 text-base md:text-lg">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className=""
          >
            <p>
              <span className="text-wushu-red-100 font-semibold">
                Instagram:
              </span>{" "}
              @wushuatucr
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className=""
          >
            <p>
              <span className="text-wushu-red-100 font-semibold">YouTube:</span>{" "}
              @wushuatucr5917
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className=""
          >
            <p>
              <span className="text-wushu-red-100 font-semibold">
                Facebook:
              </span>{" "}
              @wushuatucr
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className=""
          >
            <p>
              <span className="text-wushu-red-100 font-semibold">Discord:</span>{" "}
              <Link
                href="https://discord.com/invite/MrwmqwWAQW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wushu-red-300 break-words underline"
              >
                discord.com/invite/MrwmqwWAQW
              </Link>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className=""
          >
            <p className="text-wushu-gold-100 text-sm italic">
              (p.s. we’re mostly active here—stay tuned for the latest updates!)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
