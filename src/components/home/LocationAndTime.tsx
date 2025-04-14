import React from "react";
import Image from "next/image";

const LocationAndTime = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-2/3 gap-1 rounded-md p-10">
      <div className="flex w-2/3 flex-col justify-items-center gap-1 rounded-md p-10">
        <div>
          <h1 className="text-wushu-gold-100 top-left text-5xl font-extrabold">
            Location and Times
          </h1>
          <Image
            src="/images/who_we_are/location_and_times_img.webp"
            alt="Location and Times (shows club participants all participating in an activity)"
            width={1000}
            height={300}
          />
        </div>
      </div>
      <div className="text-wushu-red-100 flex w-2/3 flex-col justify-items-start gap-1 p-10 pt-10 pb-3 text-3xl font-bold">
        <h2>Location:</h2>
        <h2>MPR C</h2>
        <h2 className="pt-10">Times:</h2>
        <h2>Wednesday 3:00-5:00PM</h2>
        <h2>Sunday 5:00-7:00PM</h2>
      </div>
    </div>
  );
};

export default LocationAndTime;
