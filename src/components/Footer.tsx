import cloudfooter from "@/public/logos/cloudfooter.svg";
import logo from "@/public/logos/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/data/footer";

const Footer = () => {
  return (
    <div className="relative flex w-full items-center">
      <Image src={cloudfooter} alt="cloudfooter" className="w-screen" />
      <div className="flex">
        <div className="absolute bottom-0 left-0 p-10">
          <Link href="/">
            <Image src={logo} alt="" width={600} />
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 flex items-center gap-8 p-10">
          {links.map((item, index) => (
            <Link href={item.link} target="_blank" key={index} className="">
              <Image src={item.icon} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
