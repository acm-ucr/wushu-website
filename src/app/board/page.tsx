import MeetTheBoard from "@/components/board/MeetTheBoard";
import BoardMemberMap from "@/components/board/Cards";
import LineBreak from "@/components/LineBreak";
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
