import BoardMemberCard from "./BoardMemberCard";
import { BoardMembers } from "../../data/BoardMembers";

const BoardMemberMap = () => {
  return (
    <div className="relative mx-auto grid w-5/6 grid-cols-3 justify-center gap-x-5 gap-y-12 pt-5">
      {BoardMembers.map((Member) => (
        <div key={Member.key}>
          <BoardMemberCard
            key={Member.key}
            photo={Member.photo}
            position={Member.position}
            name={Member.name}
            year={Member.year}
            major={Member.major}
            pronouns={Member.pronouns}
          />
        </div>
      ))}
    </div>
  );
};

export default BoardMemberMap;
