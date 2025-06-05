"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const calendarAnimated = {
  hidden: {opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 1.2,
        scale: {type: "spring", duration: 0.8, bounce: 0.4 },
      },
    },
  };

function CalendarUI({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={calendarAnimated}
  >
    <DayPicker
      formatters={{
        formatWeekdayName: (day) =>
          day.toLocaleDateString("en-US", { weekday: "short" }),
      }}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label:
          " text-lg md:text-4xl lg:text-6xl font-semibold font-khula text-wushu-red-100",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse",
        head_row: "grid-cols-7 w-full", //Removed flex
        head_cell:
          " bg-wushu-red-100 border border-wushu-red-100 text-muted-foreground font-normal text-white font-khula text-sm md:text-lg lg:text-2xl pt-1.5",
        row: "grid-cols-7 w-full mt-2",
        cell: cn(
          " border-2 border-solid border-wushu-red-100 relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          " size-10 md:size-20 lg:size-34 md:text-lg lg:text-2xl p-0.5 md:pr-1 lg:p-2 font-normal aria-selected:opacity-100",
          "flex items-start justify-end",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("lg:size-10", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("lg:size-10", className)} {...props} />
        ),
      }}
      {...props}
    />
    </motion.div>
  );
}

export { CalendarUI };
