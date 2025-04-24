import "./globals.css";
import { Arimo, Inter, Magra, Khula, Amaranth } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
<<<<<<< HEAD
        className={`w-screen ${arimo.className} ${amaranth.className} ${inter.className} ${khula.className} ${magra.className}`}
=======
        className={`bg-wushu-cream-100 w-screen ${arimo.className} ${inter.className} ${khula.className} ${magra.className}`}
>>>>>>> a913a406b573e55a2e859288d1a17e4d5b8cb048
      >
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
