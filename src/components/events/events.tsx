"use client";

import { motion } from "motion/react";
import {
  CalendarUI,
  EventProps,
  GoogleEventProps,
} from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
// import Title from "../Title";

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});

  const { data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: start.dateTime,
          end: end.dateTime,
          location,
          description,
          title: summary,
        }),
      );

      return events;
    },
  });

  return (
    <>
      {/* <Title text="Events" /> */}
      <motion.div
        className="box"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {
          <Dialog
            open={Object.keys(current).length > 0}
            onOpenChange={() => setCurrent({})}
          >
            <DialogContent className="bg-wushu-cream-100 h-52">
              <DialogHeader>
                <DialogTitle>
                  <p className="font-khula text-wushu-red-100 text-2xl">
                    {current.title}
                  </p>
                  <p className="text-md mt-4 font-normal">
                    {current.location} from{" "}
                    {new Date(current.start as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}{" "}
                    to{" "}
                    {new Date(current.end as string).toLocaleTimeString(
                      "en-US",
                      {
                        hour: "2-digit",
                        minute: "2-digit",
                      },
                    )}
                  </p>
                </DialogTitle>
                <DialogDescription>{current.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        }
      </motion.div>

      <motion.div
        className="box"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <CalendarUI
          mode="single"
          selected={new Date()}
          className="h-screen"
          events={data}
          setCurrent={setCurrent}
        />
      </motion.div>
    </>
  );
};

export default Events;
