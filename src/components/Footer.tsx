import cloudfooter from "@/public/logos/cloudfooter.svg";
//import logo from "@/public/logos/logo.svg";
//import Link from "next/link";
import Image from "next/image";
//import {links} from "../data/footerLinks";

const Footer = () => {
  return (
    <div className="flex w-full items-center">
      <Image src={cloudfooter} alt="cloudfooter" className="w-screen" />
    </div>
  );
};

export default Footer;
