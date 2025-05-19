"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Header from "@/components/Header";
import leftArrow from "@/public/logos/left-arrow.svg";
import rightArrow from "@/public/logos/right-arrow.svg";

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

interface Photo {
    src: StaticImageData;
    alt: string;
}

interface SnapshotsProps { //array of photos
    photos: Photo[];
}

const Snapshots = ({photos}: SnapshotsProps) => {
    //const [currIndex, setCurrentIndex] = useState(0);

    return(
        <div className="relative">
            <Header title={"Snapshots"}></Header>
            {/* <div className="flex items-center">
                <div><Image src={leftArrow} alt={"left arrow"} width={100} onClick={scrollNext}></Image></div>
                <div className="flex">
                    {photos.map((item, index) => (
                        <Image src={item.src} alt={item.alt} key={index}/>
                    ))}
                </div>
                <div><Image src={rightArrow} alt={"right arrow"} width={100}></Image></div>  
            </div> */}
            <div className="flex items-center justify-center gap-7">                
                <Swiper 
                    effect={'coverflow'}
                    
                    centeredSlides={true}
                   
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 7,
                    }}
                    pagination={{el: '.swiper-pagination', clickable: true}}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow,Pagination,Navigation]}
                    className="swiper_container"

                    style={{width: "100rem"}}

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
                        <SwiperSlide className=""><Image src={item.src} alt={item.alt} key={index}/></SwiperSlide>
                    ))}
                    {/* <SwiperSlide className="bg-center bg-cover block"><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
                    <SwiperSlide ><Image src={leftArrow} alt={"left arrow"} width={100}/></SwiperSlide>
 */}

                    <div className="swiper-button-prev" ><Image src={leftArrow} alt={"left arrow"} width={100} ></Image></div>
                    <div className="swiper-button-next"><Image src={rightArrow} alt={"right arrow"} width={100}></Image></div>  
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div> 
        </div>
        
    );
};

export default Snapshots;