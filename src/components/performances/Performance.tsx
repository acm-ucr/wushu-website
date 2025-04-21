import React from "react";

interface PerformanceProps {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  imageOnLeft: boolean;
}

const Performance = ({
  imageSrc,
  title,
  date,
  description,
  imageOnLeft = false,
}: PerformanceProps) => {
  return (
    <div
      className={`mt-11 flex items-center md:flex-row ${imageOnLeft ? "flex md:flex-row" : "flex-row-reverse md:flex-row-reverse"}`}
    >
      <div className="flex w-full justify-center px-14 md:w-1/2">
        <img src={imageSrc} alt={title} className="w-full object-cover" />
      </div>
      <div className="w-full px-14 text-left md:w-1/2 md:text-left">
        <div className="text-wushu-red-100 font-arimo text-lg font-bold italic">
          {title}
        </div>
        <div className="text-md text-wushu-red-100 font-arimo italic">
          {date}
        </div>
        <div className="text-wushu-red-100 font-arimo mt-5 text-base">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Performance;
   