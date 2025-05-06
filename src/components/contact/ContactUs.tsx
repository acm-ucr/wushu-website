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
            className="w-full h-auto rounded-lg shadow-lg ring-4 ring-wushu-gold-200"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 text-wushu-gold-100">
        <h2 className="mb-4 text-2xl font-bold text-wushu-red-200 md:text-4xl">
          CONTACT <span className="text-wushu-gold-200">US</span>
        </h2>
        <div className="space-y-3 text-base md:text-lg">
          <p>
            <span className="font-semibold text-wushu-red-100">Instagram:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="font-semibold text-wushu-red-100">YouTube:</span>{" "}
            @wushuatucr5917
          </p>
          <p>
            <span className="font-semibold text-wushu-red-100">Facebook:</span>{" "}
            @wushuatucr
          </p>
          <p>
            <span className="font-semibold text-wushu-red-100">Discord:</span>{" "}
            <Link
              href="https://discord.com/invite/MrwmqwWAQW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-wushu-red-300 break-words underline"
            >
              discord.com/invite/MrwmqwWAQW
            </Link>
          </p>
          <p className="text-sm italic text-wushu-gold-100">
            (p.s. we’re mostly active here—stay tuned for the latest updates!)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
