"use client";
import Header from "@/components/Header";
import { motion } from "motion/react";
import Performance from "@/components/performances/Performance";
import TimelineMarker from "@/components/performances/TimelineMarker";
import YearLabel from "@/components/performances/YearLabel";
import performanceData from "@/data/performanceInfo";

const Cards = () => {
  return (
    <div className="relative h-full w-full px-4">
      <div className="bg-wushu-gold-300 absolute top-[8%] left-1/2 z-0 h-[95%] w-0.5 -translate-x-1/2 -translate-y-10 lg:top-[5%] lg:h-[105%] lg:translate-y-0" />

      <TimelineMarker direction="left" position="top-[13%]" />
      <TimelineMarker direction="right" position="top-[30%]" />
      <TimelineMarker direction="left" position="top-[45%]" />
      <TimelineMarker direction="right" position="top-[62%]" />
      <TimelineMarker direction="left" position="top-[77%]" />
      <TimelineMarker direction="right" position="top-[93%]" />

      <YearLabel year="2024" position="top-[4%] " />
      <YearLabel year="2023" position="top-[53%] md:top-[55%] " />

      <div className="relative z-10 mt-[10%] w-full translate-x-[6%] translate-y-[8%] px-4 sm:mt-10 md:mt-20 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-5 ml-5 md:mt-24 md:mb-8 md:ml-12 lg:mt-0 lg:mb-8 lg:ml-14"
        >
          <Header title="Performances" isRed={true} />
        </motion.div>
      </div>

      <div className="relative z-10 mt-20 items-center sm:mt-20 md:mt-25 lg:mt-25">
        {performanceData.map((p, i) => (
          <Performance key={i} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
