"use client";
import WushuLogo from "@/public/images/home/wushulogo.svg";
import Link from "next/link";
import Image from "next/image";
import { tags } from "@/data/Nav";
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
    <div className="bg-wushu-cream-100 border-wushu-red-100 sticky top-0 z-50 flex flex-row items-end justify-between gap-x-2 border-b-2 md:px-4">
      <Link href="/">
        <Image src={WushuLogo} alt="Wushu logo" className="my-3 w-48" />
      </Link>

      <FaBars
        className="text-wushu-red-100 mx-12 my-6 text-3xl md:hidden"
        onClick={handleMobileMenu}
      />
      {tags.map(({ name, link }, index) => (
        <Link
          href={link}
          key={index}
          className={`text-wushu-red-100 font-khula hidden items-center text-2xl tracking-tight whitespace-nowrap md:flex xl:text-3xl ${pathName === link ? "font-bold" : ""}`}
        >
          {name}
        </Link>
      ))}

      <div
        className={`border-wushu-red-100 font-arimo text-wushu-red-100 bg-wushu-cream-100 absolute top-full right-0 flex w-1/2 flex-col gap-x-5 border-2 md:hidden ${showMobileMenu ? animation : "hidden"}`}
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
