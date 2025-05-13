import React from "react";

const JoinForm = () => {
  return (
    <div className="justify-left w-full flex-col px-25">
      <div className="relative mt-6 mb-3">
        <div className="text-wushu-red-100 font-margasa absolute top-1 -left-1 text-5xl font-bold">
          HOW TO JOIN
        </div>
        <div className="text-wushu-gold-100 font-margasa relative text-5xl font-extrabold">
          HOW TO JOIN
        </div>
      </div>
      <h1 className="text-wushu-red-100 mt-6 mb-5 max-w-md text-left text-2xl">
        We are open to people of all experience levels, whether you have no
        experience or years of experience! To join, feel free to just show up to
        our designated practice times. Please join our Discord as well if you'd
        like up-to-date practice details or follow our Instagram. We have a nice
        community on Discord where you can chat or learn more about Wushu!
      </h1>
      <a
        href="https://discord.gg/xvCtPYCBcQ"
        className="ring-wushu-gold-100 bg-wushu-white-100 hover:bg-wushu-red-200 text-wushu-red-100 mb-2 block w-fit rounded-xl px-6 py-4 text-center text-2xl font-bold ring-4 transition duration-300 hover:text-white"
      >
        JOIN OUR DISCORD HERE!
      </a>
    </div>
  );
};

export default JoinForm;
