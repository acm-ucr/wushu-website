import Image from "next/image";

const MeetTheBoard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-[#f8f1dc] px-6 py-10 md:flex-row md:px-20">
      {/* Left: Group Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/meet_the_board/meet_the_board.webp"
          alt="Wushu Board Group Photo"
          className="rounded-lg border-[6px] border-[#d6ae5e] shadow-xl"
          width={600}
          height={500}
        />
      </div>

      {/* Right: Title + Paragraph */}
      <div className="font-playfair w-full text-[#b42422] md:w-1/2">
        <h2 className="text-4xl leading-snug font-extrabold drop-shadow-md md:text-5xl">
          MEET THE <br />
          <span className="text-[#f2cc4c] drop-shadow-lg">2024–2025</span> BOARD
        </h2>

        <p className="mt-6 text-base leading-relaxed font-medium text-red-700 md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa.
        </p>
      </div>
    </div>
  );
};

export default MeetTheBoard;
