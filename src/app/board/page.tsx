import BoardMemberCard from "../../components/board/BoardMemberCard";
import { BoardMembers } from "../../data/BoardMembers";

const Board = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      {BoardMembers.map((Member) => (
        <div className="max-w-[348px]" key={Member.key}>
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

export default Board;
