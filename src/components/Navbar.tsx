"use client";
import WushuLogo from "@/public/images/home/wushulogo.svg";
import { tags } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [animation, setAnimation] = useState("hidden");

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileMenu) setAnimation("animate-expand");
    else setAnimation("animate-collapse");
  };

  const pathName = usePathname();
  return (
    <div className="bg-wushu-cream-100 border-wushu-red-100 sticky top-0 flex w-full items-end justify-between border-b-2">
      {/* logo */}
      <Link href="/">
        <Image
          src={WushuLogo}
          alt="Wushu logo"
          className="my-[1vw] w-[28vw] min-w-50"
        />
      </Link>

      <div className="mx-12 my-6 md:hidden" onClick={handleMobileMenu}>
        <FaBars className="text-wushu-red-100 text-3xl" />
      </div>

      {/* desktop menu */}
      <div className="text-wushu-red-100 font-khula hidden w-full justify-end gap-8 pr-20 text-[2.5vw] tracking-tight whitespace-nowrap md:flex">
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

      {/* mobile drop down menu */}
      <div
        className={`border-wushu-red-100 font-arimo text-wushu-red-100 bg-wushu-cream-100 absolute top-full right-0 flex w-1/2 flex-col border-2 md:hidden ${showMobileMenu ? animation : "hidden"}`}
      >
        {tags.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            className={`${pathName === link ? "font-bold" : ""} px-4 pb-2`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
