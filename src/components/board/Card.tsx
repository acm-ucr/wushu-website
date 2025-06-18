"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface BoardMemberCardProps {
  photo: StaticImageData;
  position: string;
  name: string;
  year: string;
  major: string;
  pronouns: string;
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      scale: { type: "spring", duration: 0.4, bounce: 0.3 },
    },
  },
};

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({
  photo,
  position,
  name,
  year,
  major,
  pronouns,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="font-arimo justify-items-center -tracking-[0.1em] whitespace-nowrap"
    >
      <Image src={photo} alt={`Photo of ${name}`} />
      <div className="text-wushu-red-100 text-4xl leading-20 font-bold italic md:text-2xl md:leading-12 lg:text-3xl lg:leading-15 xl:text-4xl xl:leading-20">
        {position}
      </div>
      <div className="text-wushu-red-100 text-4xl leading-0 italic md:text-2xl md:leading-3 lg:text-3xl lg:leading-5 xl:text-4xl xl:leading-0">
        {name}
      </div>
      <div className="text-wushu-gold-200 flex flex-col pt-12 text-center text-3xl leading-10 md:pt-5 md:text-xl md:leading-6 lg:pt-6 lg:text-2xl lg:leading-7 xl:pt-12 xl:text-3xl xl:leading-10">
        <div>{year}</div>
        <div>{major}</div>
        <div>{pronouns}</div>
      </div>
    </motion.div>
  );
};

export default BoardMemberCard;
