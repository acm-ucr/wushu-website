import React from "react";
import Link from "next/link";
import Image from "next/image";
import GroupPhoto from "@/public/images/contact_us/want_to_book_us.webp";
import WushuLogo from "@/public/logos/wushufront.svg";
const WantToBookUs = () => {
  return (
    <div>
      <div className="pb-8 text-8xl">WANT TO BOOK US?</div>
      <div className="flex">
        <div>
          <div className="font-arimo text-wushu-red-100 mr-8 w-[45vw] pt-8 text-4xl">
            Please fill out the form and provide us with a time, location, and
            any other details!
          </div>
          <div className="flex h-[80%] w-[80%] items-center justify-center">
            <Link
              className="border-wushu-gold-100 flex h-[24vh] w-[24vw] items-center justify-center rounded-2xl border-6 bg-white"
              href="book-us"
            >
              <Image
                src={WushuLogo}
                alt="Wushu Logo"
                className="h-[20vh] object-contain"
              />
              <div className="text-wushu-red-100 font-amaranth flex w-[110%] text-left text-4xl font-bold">
                BOOK US HERE!
              </div>
            </Link>
          </div>
        </div>
        <Image
          src={GroupPhoto}
          alt="Wushu Grouop Photo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WantToBookUs;
