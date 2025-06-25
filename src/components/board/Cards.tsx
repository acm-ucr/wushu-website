"use client";
import BoardMemberCard from "@/components/board/Card";
import { BoardMembers } from "@/data/BoardMembers";

const BoardMemberMap = () => {
  return (
    <div className="relative mx-auto grid w-5/6 grid-cols-1 justify-center gap-x-5 gap-y-12 pt-5 md:grid-cols-3">
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
    </div>
  );
};

export default BoardMemberMap;
