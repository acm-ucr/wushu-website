import cloudfooter from "@/public/logos/cloudfooter.svg";
//import logo from "@/public/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/footer";

const Footer = () => {
  return (
    <div className="flex w-full items-center">
      <Image src={cloudfooter} alt="cloudfooter" className="w-screen" />
      <div className="flex justify-end">
        {links.map((item, index) => (
          <Link href={item.link} target="_blank" key={index} className="">
            {item.icon}
          </Link>
          //<div></div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
