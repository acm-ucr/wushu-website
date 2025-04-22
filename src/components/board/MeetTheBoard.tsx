import Image from "next/image";

const MeetTheBoard = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-[#f8f1dc] px-6 py-10 md:flex-row md:px-20">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/meet_the_board/meet_the_board.webp"
          alt="Wushu Board Group Photo"
          className="rounded-lg border-[6px] border-[#d6ae5e] shadow-xl"
          width={600}
          height={500}
        />
      </div>

      <div className="w-full md:w-1/2 text-[#b42422]">
        <div
          className="text-4xl md:text-7xl font-extrabold leading-snug"
          style={{
            fontFamily: "Maragsa",
            color: "#b42422",
            textShadow: "-2px 2px 0 #f2cc4c",
          }}
        >
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
