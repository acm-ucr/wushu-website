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
          className="w-full rounded-lg border-4 border-yellow-500 shadow-lg"
        />
      </div>
      {}
      <div className="w-full md:w-1/2">
        <div className="text-5xl leading-tight font-bold text-yellow-500 md:text-6xl lg:text-7xl">
          <div>MEET THE</div>
          <div>2024–2025</div>
          <div>BOARD</div>
        </div>
        <div className="mt-6 text-base leading-relaxed font-medium text-red-700 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa.
        </div>
      </div>
    </div>
  );
};

export default MeetTheBoard;
