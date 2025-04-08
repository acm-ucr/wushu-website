import React from "react";
import Image, { StaticImageData } from "next/image";

interface BoardMemberCardProps {
  photo: StaticImageData;
  title: string;
  name: string;
  year: string;
  major: string;
  pronouns: string;
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({
  photo,
  title,
  name,
  year,
  major,
  pronouns,
}) => {
  return (
    <div className="justify-items-center">
      <Image src={photo} alt={`Photo of ${name}`} />
      <div className="text-wushu-red-100 text-[45px] leading-24 font-bold italic">
        {/* still need to add arimo font? not sure if it hasnt been added yet or smth */}
        {title}
      </div>
      <div className="text-wushu-red-100 text-[40px] leading-0 italic">
        {name}
      </div>
      <br />
      <br />
      <div className="text-wushu-gold-200 text-center text-[32px] leading-10">
        {year} <br />
        {major} <br />
        {pronouns} <br />
      </div>
    </div>
  );
};

export default BoardMemberCard;
