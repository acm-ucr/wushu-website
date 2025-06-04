import React from "react";
import Image from "next/image";
import Performance from "@/components/performances/Performance";
import lefttriangle from "@/public/logos/lefttriangle.svg";
import righttriangle from "@/public/logos/righttriangle.svg";

const Performances = () => {
  return (
    <div className="px-4">
      <div className="relative">
        <div className="absolute top-25 left-1/2 h-370 w-0.5 -translate-x-1/2 bg-[#C69A1F] sm:top-30 sm:h-375 sm:w-0.5 md:top-40 md:h-590 md:w-1 lg:h-590 lg:w-1" />

        <div className="absolute top-50 left-1/2 -translate-x-full md:top-78">
          <Image
            src={lefttriangle}
            alt="Left Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute top-119 right-1/2 translate-x-full sm:top-119 md:top-182 lg:top-182">
          <Image
            src={righttriangle}
            alt="Right Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute top-190 left-1/2 -translate-x-full sm:top-190 md:top-283">
          <Image
            src={lefttriangle}
            alt="Left Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute top-253 right-1/2 translate-x-full sm:top-253 md:top-384 lg:top-384">
          <Image
            src={righttriangle}
            alt="Right Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute top-312 left-1/2 -translate-x-full sm:top-312 md:top-486 lg:top-486">
          <Image
            src={lefttriangle}
            alt="Left Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute top-377 right-1/2 translate-x-full sm:top-400 md:top-588 lg:top-588">
          <Image
            src={righttriangle}
            alt="Right Triangle"
            className="w-3 md:h-9 md:w-9"
          />
        </div>

        <div className="absolute left-1/2 z-10 mt-5 -translate-x-1/2 sm:mt-10 md:mt-15 lg:mt-15">
          <div className="font-arimo mt-15 rounded-full bg-[#C69A1F] px-3 py-1 text-center text-sm font-semibold text-white sm:px-4 sm:py-2 sm:text-2xl md:px-4 md:py-2 md:text-2xl lg:px-4 lg:py-2 lg:text-2xl">
            2024
          </div>
        </div>

        <div className="absolute left-1/2 z-10 mt-280 -translate-x-1/2 sm:mt-280 md:mt-434 lg:mt-434">
          <div className="font-arimo rounded-full bg-[#C69A1F] px-3 py-1 text-center text-sm font-semibold text-white sm:px-4 sm:py-2 sm:text-2xl md:px-4 md:py-2 md:text-2xl lg:px-4 lg:py-2 lg:text-2xl">
            2023
          </div>
        </div>
      </div>

      <div className="justify-left mt-10 w-full flex-col px-4 sm:mt-10 sm:px-4 md:mt-20 md:px-14 lg:mt-20 lg:px-14">
        <div className="relative mb-3">
          <div className="text-wushu-red-100 font-margasa absolute top-0.5 -left-0.5 text-4xl sm:top-0.5 sm:-left-0.5 sm:text-4xl md:top-1 md:-left-1 md:text-6xl lg:top-1 lg:-left-1 lg:text-7xl">
            PERFORMANCES
          </div>
          <div className="text-wushu-gold-100 font-margasa relative text-4xl sm:text-4xl md:text-6xl lg:text-7xl">
            PERFORMANCES
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-20 md:mt-25 lg:mt-25">
        <Performance
          imageSrc="\images\performances\2024 blossom performance.webp"
          title="2024 ASPB - BLOSSOM PERFORMANCE"
          date="June 15, 2024"
          description="With the blooming spring, we kicked off the spring quarter of good times with a performance under the Bell Tower."
          imageOnLeft={true}
        />

        <Performance
          imageSrc="\images\performances\2024 ccn.webp"
          title="2024 CCN - CHINESE CULTURE NIGHT PERFORMANCE"
          date="June 5, 2024"
          description="We had our last performance of the year at CCN! Thank you to the CCN organizers for allowing us the honor to perform. Thank you so much to one of our members for the footage. Give a shoutout to our members who trained very hard for this!"
          imageOnLeft={false}
        />

        <Performance
          imageSrc="\images\performances\2024 asucr.webp"
          title="2024 ASUCR - GLOBAL FAIR PERFORMANCE"
          date="February 23, 2024"
          description="We had a lot of fun wushu-ing outside at the Bell Tower :) Welcome some our members who are performing for the first time! Performed on February 23rd, 2024."
          imageOnLeft={true}
        />

        <Performance
          imageSrc="\images\performances\2024 asps.webp"
          title="2024 APSP - LUNAR NEW YEAR FESTIVAL PERFORMANCE"
          date="February 15, 2024"
          description="Thank you so much APSP for allowing us the honor of performing for your Lunar New Year event once again this year!"
          imageOnLeft={false}
        />

        <Performance
          imageSrc="\images\performances\2023 education abroad.webp"
          title="2023 EDUCATION ABROAD - WORLD FEST PERFORMANCE"
          date="December 2, 2023"
          description="We had a lot of fun performing at UCR Education Abroad's showcase! The first of hopefully many more performances this year."
          imageOnLeft={true}
        />

        <Performance
          imageSrc="\images\performances\2023 asps.webp"
          title="2023 APSP - LUNAR NEW YEAR FESTIVAL PERFORMANCE"
          date="February 26, 2023"
          description="Our first performance of the year! Thank you APSP for letting us perform at your venue! We're excited to train harder for our next performances and do even better!"
          imageOnLeft={false}
        />
      </div>
    </div>
  );
};

export default Performances;
