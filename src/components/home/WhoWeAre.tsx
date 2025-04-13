import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-2/3 gap-1 rounded-md p-10">
      <div className="flex w-2/3 flex-col justify-items-center gap-1 rounded-md p-10">
        <div>
          <h1 className="text-wushu-gold-200 text-5xl font-extrabold">
            Who We Are
          </h1>
          <Image
            src="/images/who_we_are/who_we_are_img.webp"
            alt="Who We Are"
            width={1000}
            height={300}
          />
        </div>
      </div>
      <div className="flex w-2/3 flex-col justify-items-center gap-1 p-10">
        <h2 className="text-wushu-gold-100 pt-10 pb-3 text-3xl font-bold">
          What is Wushu?
        </h2>
        <h3 className="text-wushu-red-100 text-xl">
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
