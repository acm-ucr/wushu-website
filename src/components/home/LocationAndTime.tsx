import React from "react";
import Image from "next/image";

const LocationAndTime = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-2/3 rounded-md p-10">
      <div className="flex w-2/3 flex-col justify-items-center gap-1 rounded-md p-10">
        <div>
          <h1 className="text-wushu-gold-100 top-left font-margasa text-5xl font-extrabold">
            LOCATION AND TIMES
          </h1>
          <Image
            src="/images/who_we_are/location_and_times_img.webp"
            alt="Location and Times (shows club participants all participating in an activity)"
            width={3000}
            height={3000}
          />
        </div>
      </div>
      <div className="text-wushu-red-100 font-arimo flex w-2/5 flex-col pt-10 text-[24px] tracking-tighter">
        <h2 className="pt-20">Location:</h2>
        <h2>MPR C</h2>
        <h2 className="pt-5">Times:</h2>
        <h2>Wednesday 3:00-5:00PM</h2>
        <h2>Sunday 5:00-7:00PM</h2>
      </div>
    </div>
  );
};

export default LocationAndTime;
