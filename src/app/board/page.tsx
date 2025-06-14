import MeetTheBoard from "@/components/board/MeetTheBoard";
import BoardMemberMap from "@/components/board/Cards";
import LineBreak from "@/components/LineBreak";
const Board = () => {
  return (
    <>
      <MeetTheBoard />
      <LineBreak />
      <BoardMemberMap />
      <LineBreak />
    </>
  );
};

export default Board;
