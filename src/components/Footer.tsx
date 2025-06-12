"use client";
import cloudfooter from "@/public/logos/cloudfooter.svg";
import logo from "@/public/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import gold from "@/public/logos/goldcorners.svg";
import { links } from "@/data/Footer";
import { motion } from "framer-motion";

const HoverAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      {children}
    </motion.div>
  );
};
const Footer = () => {
  return (
    <div className="relative w-full items-center">
      <Image
        src={cloudfooter}
        alt="cloudfooter"
        className="hidden w-screen md:block"
      />
      <div className="flex">
        <div className="absolute bottom-0 left-0 hidden p-10 md:block">
          <Link href="/">
            <Image src={logo} alt="" width={600} />
          </Link>
        </div>
        <div className="absolute bottom-0 mb-10 flex w-screen justify-center gap-4 p-10 md:right-0 md:mb-0 md:w-fit md:gap-8">
          <div className="md:hidden">
            <Image
              src={gold}
              alt="goldcorner"
              className="absolute -translate-x-5 translate-y-8"
              width={50}
            />
            <Image
              src={gold}
              alt="goldcorner"
              className="absolute -translate-x-5 -translate-y-9 rotate-90"
              width={50}
            />
          </div>

          {links.map((item, index) => (
            <HoverAnimation key={index}>
              <Link href={item.link} target="_blank" key={index} className="">
                <Image src={item.icon} alt="" />
              </Link>
            </HoverAnimation>
          ))}
          <div className="md:hidden">
            <Image
              src={gold}
              alt="goldcorner"
              className="absolute -translate-x-7 translate-y-8 rotate-270"
              width={50}
            />
            <Image
              src={gold}
              alt="goldcorner"
              className="absolute -translate-x-7 -translate-y-9 rotate-180"
              width={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
