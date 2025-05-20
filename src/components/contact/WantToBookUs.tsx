import React from "react";
import Link from "next/link";
import Image from "next/image";
import GroupPhoto from "@/public/images/contact_us/want_to_book_us.webp";
import WushuLogo from "@/public/logos/wushufront.svg";
import Header from "../Header";

const email = `mailto:wushu.ucriverside@gmail.com?subject=${encodeURIComponent("Wushu Performance Request")}&body=${encodeURIComponent(`Hi Wushu club,

We would like you to perform at our event! Here are some details:
Organization: 
Event: 
Date & time: 
Location: 
Other details: 

Thank you!`)}`;

const WantToBookUs = () => {
  return (
    <div className="m-7">
      <Header title="WANT TO BOOK US?" isRed={true} />
      <div className="flex flex-col pb-44 lg:flex-row">
        <div>
          <div className="font-arimo text-wushu-red-100 w-xs pt-10 text-sm md:mr-8 md:w-2xl md:text-2xl">
            We love to perform for school events as well as off-campus
            organizations! We’ve performed for APSP, ASPB, CSA, NSU, and more on
            campus, as well as for the Rancho Cucamonga Lunar New Year Festival
            off-campus. Please email us with a time, location, and any other
            logistical details about the event! We perform for free and our
            performances are usually within 10 minutes of runtime.
          </div>
          <div className="flex h-80 w-xl items-center md:justify-center">
            <Link
              className="border-wushu-gold-100 flex h-45 w-80 items-center justify-center rounded-2xl border-6 bg-white"
              href={email}
            >
              <Image
                src={WushuLogo}
                alt="Wushu Logo"
                className="h-40 object-contain"
              />
              <div className="text-wushu-red-100 font-amaranth flex w-76 text-left text-4xl font-bold">
                Email Us!
              </div>
            </Link>
          </div>
        </div>
        <Image
          src={GroupPhoto}
          alt="Wushu Group Photo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WantToBookUs;
