import React from "react";
import Image, { StaticImageData } from "next/image";

interface BoardMemberCardProps {
  photo: StaticImageData;
  position: string;
  name: string;
  year: string;
  major: string;
  pronouns: string;
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({
  photo,
  position,
  name,
  year,
  major,
  pronouns,
}) => {
  return (
    <div className="justify-items-center font-arimo -tracking-[0.1em] whitespace-nowrap">
      <Image src={photo} alt={`Photo of ${name}`} />
      <div className="text-wushu-red-100 text-5xl leading-24 font-bold italic">
        {position}
      </div>
      <div className="text-wushu-red-100 text-4xl leading-0 italic">{name}</div>
      <div className="text-wushu-gold-200 flex flex-col pt-12 text-center text-3xl leading-10">
        <div>{year}</div>
        <div>{major}</div>
        <div>{pronouns}</div>
      </div>
    </div>
  );
};

export default BoardMemberCard;
