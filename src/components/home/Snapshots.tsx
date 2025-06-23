"use client";
import Image, { StaticImageData } from "next/image";
import Header from "@/components/Header";
import { snapshots } from "@/data/Shots";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface SnapshotsProps {
  photos?: Photo[];
}

const Snapshots = ({ photos = snapshots }: SnapshotsProps) => {
  return (
    <div className="relative m-20 -mt-36 -mb-2 md:mt-20 md:mb-0 lg:mb-0 lg:mt-20">
      <motion.div
        initial={{ opacity: 0, y: -20, x: -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className=""
      >
        <Header title="SNAPSHOTS" isRed={true}></Header>
      </motion.div>
      <div className="flex items-center justify-center gap-7">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 7,
          }}
          pagination={{ el: ".swiper-pagination" }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          style={{ width: "100rem" }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((item, index) => (
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className=""
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    key={index}
                    width={500}
                    height={500}
                  />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Snapshots;
