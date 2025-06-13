"use client";

import Border from "../../../../public/logos/border.svg";
import Image from "next/image";
import React from "react";
// import { CalendarUI } from "../../ui/calendar";
import Events from "../events";
import { useEffect } from "react";

const WushuCalendar = () => {
  useEffect(() => {
    console.log(
      "Calendar API Key:",
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY,
    );
    console.log("Calendar Email:", process.env.NEXT_PUBLIC_GOOGLE_CALENDAR);
  }, []);
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
      {/* <CalendarUI className="h-screen" /> */}
      <Events />
    </div>
  );
};

export default WushuCalendar;
