import Image from "next/image";

const MeetTheBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6 py-12 md:flex-row">
      {}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/meet_the_board/meet_the_board.webp"
          alt="Wushu Board Group Photo"
          width={600}
          height={500}
          priority
          className="border-wushu-gold-100 w-full rounded-lg border-4 shadow-lg"
        />
      </div>
      {}
      <div className="w-full md:w-1/2">
        <div className="text-wushu-gold-100 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
          <div>MEET THE</div>
          <div>2024–2025</div>
          <div>BOARD</div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheBoard;
