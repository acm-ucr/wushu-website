import "./globals.css";
import { Arimo, Inter, Magra, Khula } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--arimo-font",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--inter-font",
});

const khula = Khula({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--khula-font",
});

const magra = Magra({
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
        className={`w-screen ${arimo.className} ${inter.className} ${magra.className} ${khula.className}`}
      >
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
