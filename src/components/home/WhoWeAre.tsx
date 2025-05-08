import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="flex w-full content-start gap-1 p-10">
      <div className="flex w-2/3 flex-col items-center">
        <div>
          <div className="text-wushu-gold-200 font-margasa mb-6 text-5xl font-extrabold">
            WHO WE ARE
          </div>
          <div className="bg-wushu-red-200">
            <Image
              src="/images/who_we_are/who_we_are_img.webp"
              alt="Who We Are"
              width={585}
              height={575}
              className="translate-x-5 -translate-y-5"
            />
          </div>
        </div>
      </div>
      <div className="flex w-1/2 flex-col">
        <h2 className="text-wushu-gold-100 font-arimo pt-25 pb-1 text-4xl font-bold">
          WHAT IS WUSHU?
        </h2>
        <h3 className="text-wushu-red-100 font-arimo text-3xl tracking-tighter">
          Wushu, also known as kung fu, is a competitive Chinese martial art. It
          integrates concepts and forms from various traditional and modern
          Chinese martial arts, including Shaolin kung fu, tai chi, and
          Wudangquan. "Wushu" is the Chinese term for "martial arts" (武 "Wu"=
          combat or martial, 術 "Shu" = art), it reflects the art's goal as a
          compilation and standardization of various styles. To distinguish it
          from traditional Chinese martial arts, it's called "Modern Wushu."
        </h3>
      </div>
    </div>
  );
};

export default WhoWeAre;
