import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-wushu-cream flex flex-col items-center justify-center gap-10 px-4 py-10 md:flex-row md:px-20">
      <div className="w-full md:w-1/2">
        <div className="w-full">
          <Image
            src="/images/contact_us/contact_us.webp"
            alt="Wushu Club Contact"
            width={600}
            height={400}
            className="ring-wushu-gold-200 h-auto w-full rounded-lg shadow-lg ring-4"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className="text-wushu-gold-100 w-full md:w-1/2">
        <h2 className="text-wushu-red-200 mb-4 text-2xl font-bold md:text-4xl">
          CONTACT <span className="text-wushu-gold-200">US</span>
        </h2>
        <div className="space-y-3 text-base md:text-lg">
          <p>
            <span className="text-wushu-red-100 font-semibold">Instagram:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="text-wushu-red-100 font-semibold">YouTube:</span>{" "}
            @wushuatucr5917
          </p>
          <p>
            <span className="text-wushu-red-100 font-semibold">Facebook:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="text-wushu-red-100 font-semibold">Discord:</span>{" "}
            <Link
              href="https://discord.com/invite/MrwmqwWAQW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wushu-red-300 break-words underline"
            >
              discord.com/invite/MrwmqwWAQW
            </Link>
          </p>
          <p className="text-wushu-gold-100 text-sm italic">
            (p.s. we’re mostly active here—stay tuned for the latest updates!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
