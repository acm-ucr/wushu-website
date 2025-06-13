"use client";
import BoardMemberCard from "@/components/board/Card";
import { BoardMembers } from "@/data/boardmembers";
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
      {BoardMembers.map(
        ({ key, photo, position, name, year, major, pronouns }) => (
          <BoardMemberCard
            key={key}
            photo={photo}
            position={position}
            name={name}
            year={year}
            major={major}
            pronouns={pronouns}
          />
        ),
      )}
    </motion.div>
  );
};

export default BoardMemberMap;
