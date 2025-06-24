import Image from "next/image";
import lefttriangle from "@/public/logos/lefttriangle.svg";
import righttriangle from "@/public/logos/righttriangle.svg";

interface MarkerProps {
  direction: "left" | "right";
  position: string;
}

const TimelineMarker = ({ direction, position }: MarkerProps) => (
  <Image
    src={direction === "left" ? lefttriangle : righttriangle}
    alt={`${direction} triangle`}
    className={`absolute ${position} ${
      direction === "left"
        ? "left-1/2 -translate-x-full"
        : "right-1/2 translate-x-full"
    } w-3 md:h-9 md:w-9`}
  />
);

export default TimelineMarker;
