"use client";
import WushuLogo from "@/public/images/home/wushulogo.svg";
import { tags } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-wushu-cream-100 border-wushu-red-100 sticky top-0 flex w-full items-end border-b-2">
      <Link href="/">
        <Image src={WushuLogo} alt="WushuLogo" className="my-[1vw] w-[15vw]" />
      </Link>
      <div className="text-wushu-red-100 flex w-full justify-end gap-8 pr-[5vw] text-[1.8vw]">
        {tags.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`${pathName === link ? "font-bold" : ""}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
