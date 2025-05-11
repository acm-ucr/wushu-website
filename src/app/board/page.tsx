import MeetTheBoard from "@/components/board/MeetTheBoard";
import BoardMemberMap from "@/components/board/BoardMemberMap";
import LineBreak from "@/components/board/LineBreak";
const Board = () => {
  return (
    <div className="">
      <MeetTheBoard />
      <LineBreak />
      <BoardMemberMap />
      <LineBreak />
    </div>
  );
};

export default Board;
