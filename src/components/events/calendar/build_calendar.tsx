"use client";

import Border from "../../../../public/logos/border.svg";
import Image from "next/image";
import React from "react";
import Events from "../events";

const WushuCalendar = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-full flex-col items-center justify-center lg:pb-52">
      <div className="mt-12 flex w-full justify-between px-12 lg:mt-6 lg:-mb-12">
        <Image
          src={Border}
          alt="Border left"
          className="hidden w-30 rotate-270 lg:block"
        />
        <Image
          src={Border}
          alt="Border right"
          className="hidden w-30 lg:block"
        />
      </div>
      <Events />
    </div>
  );
};

export default WushuCalendar;
