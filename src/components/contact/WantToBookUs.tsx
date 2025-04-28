import React from "react";
import Link from "next/link";
import Image from "next/image";
import GroupPhoto from "@/public/images/contact_us/want_to_book_us.webp";
import WushuLogo from "@/public/logos/wushufront.svg";

const email = `mailto:example@email.com?subject=${encodeURIComponent("Wushu Booking Request")}&body=${encodeURIComponent(`Hi Wushu Team,

  I would like to book you for an event. Here are the details:
  - Time:
  - Location:
  - Other info:
  
  Thanks!`)}`;

const WantToBookUs = () => {
  return (
    <div>
      <div className="pb-8 text-8xl">WANT TO BOOK US?</div>
      <div className="flex">
        <div>
          <div className="font-arimo text-wushu-red-100 mr-8 w-2xl pt-8 text-4xl">
            Please email us at example@email.com and provide us with a time,
            location, and any other details!
          </div>
          <div className="flex h-96 w-xl items-center justify-center">
            <Link
              className="border-wushu-gold-100 flex h-52 w-96 items-center justify-center rounded-2xl border-6 bg-white"
              href={email}
            >
              <Image
                src={WushuLogo}
                alt="Wushu Logo"
                className="h-40 object-contain"
              />
              <div className="text-wushu-red-100 font-amaranth flex w-76 text-left text-5xl font-bold">
                Email Us!
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
