import Image from "next/image";
import errorPic from "@/public/logos/wushuback.svg";

const NotFound = () => {
  return (
    <div className="bg-wushu-cream-100 flex min-h-screen flex-col items-center justify-center">
      <Image
        src={errorPic}
        alt="Wushu @ UCR logo with a crane posed above holding a sword."
        width={400}
        height={400}
      />
      <div className="text-wushu-red-100 font-arimo p-2 text-center text-7xl font-bold">
        404 Error
      </div>
      <div className="text-wushu-red-100 font-arimo text-2xl">
        Oops! Sorry we couldn't find the
      </div>
      <div className="text-wushu-red-100 font-arimo text-2xl">
        page you were looking for!
      </div>
    </div>
  );
};

export default NotFound;
