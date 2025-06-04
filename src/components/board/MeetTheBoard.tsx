import Image from "next/image";

const MeetTheBoard = () => {
  return (
    <section className="bg-yellow-50 px-4 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/meet_the_board/meet_the_board.webp"
            alt="Wushu Board Group Photo"
            width={600}
            height={500}
            priority
            className="h-auto w-full rounded-lg border-4 border-yellow-500 shadow-lg"
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="text-4xl leading-tight font-bold text-yellow-500 sm:text-5xl md:text-6xl lg:text-7xl">
            <div>MEET THE</div>
            <div>2024–2025</div>
            <div>BOARD</div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MeetTheBoard;
