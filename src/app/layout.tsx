import "./globals.css";
import { Arimo, Inter, Magra, Khula, Amaranth } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Border from "@/public/logos/border.svg";
import Image from "next/image";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--arimo-font",
});

const amaranth = Amaranth({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--arimo-font",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--inter-font",
});

const magra = Magra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--magra-font",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--magra-font",
});

export const metadata = {
  title: "Wushu @ UCR",
  description:
    "Wushu @ UCR offers students to develop their skills, learn about the culture, and engage in supportive and community-oriented environment with gatherings and performances.",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-wushu-cream-100 w-screen ${arimo.className} ${amaranth.className} ${inter.className} ${khula.className} ${magra.className}`}
      >
        <Navbar />
        <div className="absolute mt-6 flex w-full justify-between px-4 md:mt-12 md:px-12 lg:mt-6 lg:-mb-12">
          <Image
            src={Border}
            alt="Border left"
            className="block w-14 rotate-270 md:w-30"
          />
          <Image
            src={Border}
            alt="Border right"
            className="block w-14 md:w-30"
          />
        </div>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
