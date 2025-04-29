//import YES from "../../../../public/logos/wushufront.svg"
//import Image from "next/image";
import React from "react";
import { Calendar } from "../../ui/calendar";

const WushuCalendar = () => {
  return (
    <div className="bg-wushu-cream-100 flex w-full flex-col items-center justify-center pt-36 pb-24">
      {/* <Image src={YES} alt="Front"/> */}
      <Calendar className="h-screen" />
    </div>
  );
};

export default WushuCalendar;
