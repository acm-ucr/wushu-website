import React from "react";
import Image from "next/image";
import GroupPhoto from "@/public/images/contact_us/want_to_book_us.webp";
import BookUsHere from "@/public/images/contact_us/book_us_here.svg";
const WantToBookUs = () => {
  return (
    <div>
      <div className="pb-8 text-8xl">WANT TO BOOK US?</div>
      <div className="flex">
        <div>
          <div className="font-arimo text-wushu-red-100 mr-8 w-[45vw] pt-8 text-4xl">
            Please fill out the form and provide us with a time, location, and
            any other details!
          </div>
          <Image
            src={BookUsHere}
            alt="Book Us Here Link"
            className="m-20 w-sm object-contain"
          />
        </div>
        <Image
          src={GroupPhoto}
          alt="Wushu Grouop Photo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default WantToBookUs;
