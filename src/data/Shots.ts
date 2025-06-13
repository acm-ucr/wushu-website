import { StaticImageData } from "next/image";
import photo1 from "@/public/images/snapshots/snapshots1.webp";
import photo2 from "@/public/images/snapshots/snapshots2.webp";
import photo3 from "@/public/images/snapshots/snapshots3.webp";
import photo4 from "@/public/images/snapshots/snapshots4.webp";
import photo5 from "@/public/images/snapshots/snapshots5.webp";
import photo6 from "@/public/images/snapshots/snapshots6.webp";
import photo7 from "@/public/images/snapshots/snapshots7.webp";
import photo8 from "@/public/images/snapshots/snapshots8.webp";

interface Photo {
  src: StaticImageData;
  alt: string;
}

export const snapshots: Photo[] = [
  {
    src: photo1,
    alt: "photo1",
  },
  {
    src: photo2,
    alt: "photo1",
  },
  {
    src: photo3,
    alt: "photo1",
  },
  {
    src: photo4,
    alt: "photo1",
  },
  {
    src: photo5,
    alt: "photo1",
  },
  {
    src: photo6,
    alt: "photo1",
  },
  {
    src: photo7,
    alt: "photo1",
  },
  {
    src: photo8,
    alt: "photo1",
  },
];
