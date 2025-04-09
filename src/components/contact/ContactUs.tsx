import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 bg-[#f8f1dc] px-6 py-10 md:flex-row md:px-20">
      {/* Left side - Image */}
      <div className="w-full md:w-1/2">
        <Image
          src="/images/contact_us/contact_us.webp"
          alt="Wushu Club Contact"
          className="h-auto w-full rounded-lg shadow-lg"
          width={600}
          height={400}
        />
      </div>

      {/* Right side - Contact Info */}
      <div className="w-full text-[#7c470c] md:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-[#b42422] md:text-4xl">
          CONTACT <span className="text-[#f2cc4c]">US</span>
        </h2>
        <div className="space-y-4 text-lg">
          <p>
            <span className="font-semibold text-red-600">Instagram:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="font-semibold text-red-600">YouTube:</span>{" "}
            @wushuatucr5917
          </p>
          <p>
            <span className="font-semibold text-red-600">Facebook:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="font-semibold text-red-600">Discord:</span>{" "}
            <Link
              href="https://discord.com/invite/MrwmqwWAQW"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-red-700 underline"
            >
              discord.com/invite/MrwmqwWAQW
            </Link>
          </p>
          <p className="text-sm text-[#8b5e00] italic">
            (p.s. we’re mostly active here—stay tuned for the latest updates!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
