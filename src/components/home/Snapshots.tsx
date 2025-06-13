"use client";
import Image, { StaticImageData } from "next/image";
import Header from "@/components/Header";
import { snapshots } from "@/data/snapshots";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

interface Photo {
  src: StaticImageData;
  alt: string;
}

interface SnapshotsProps {
  photos?: Photo[];
}

const Snapshots = ({ photos = snapshots }: SnapshotsProps) => {
  return (
    <div className="relative m-20">
      <Header title={"SNAPSHOTS"} isRed={true}></Header>
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
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {photos.map((item, index) => (
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  key={index}
                  width={500}
                  height={500}
                />
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
