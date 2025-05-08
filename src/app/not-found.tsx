import Image from "next/image";
import errorPic from "@/public/logos/wushuback.svg";

const NotFound = () => {
  return (
    <div className="bg-wushu-cream-100 flex min-h-screen flex-col items-center justify-center">
      <Image
        src={errorPic}
        alt="Wushu @ UCR logo with a crane posed above holding a sword"
        className="h-auto w-60 sm:w-60 md:w-80 lg:w-100"
      />
      <div className="text-wushu-red-100 font-arimo p-2 text-center text-3xl font-bold sm:text-3xl md:text-5xl lg:text-6xl">
        404 Error
      </div>
      <div className="text-wushu-red-100 font-arimo sm:text-md text-center text-sm md:text-2xl lg:text-3xl">
        <div>Oops! Sorry we couldn't find the</div>
        <div>page you were looking for!</div>
      </div>
    </div>
  );
};

export default NotFound;
