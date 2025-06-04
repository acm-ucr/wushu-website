"use client";
import BoardMemberCard from "./BoardMemberCard";
import { BoardMembers } from "../../data/BoardMembers";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const BoardMemberMap = () => {
  return (
    <motion.div
      className="relative mx-auto grid w-5/6 grid-cols-1 justify-center gap-x-5 gap-y-12 pt-5 md:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {BoardMembers.map((Member) => (
        <BoardMemberCard
          key={Member.key}
          photo={Member.photo}
          position={Member.position}
          name={Member.name}
          year={Member.year}
          major={Member.major}
          pronouns={Member.pronouns}
        />
      ))}
    </motion.div>
  );
};

export default BoardMemberMap;
