import "./globals.css";
import { Arimo, Inter, Magra } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

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
      <body className={inter.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
