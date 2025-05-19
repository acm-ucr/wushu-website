"use client";
import Image, { StaticImageData } from "next/image";
import Header from "@/components/Header";
import leftArrow from "@/public/logos/left-arrow.svg";
import rightArrow from "@/public/logos/right-arrow.svg";


import { useState, useEffect } from "react";

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
        // <div className="relative">
        //     <Header title={"Snapshots"}></Header>
        //     <div className="flex items-center">
        //         <div><Image src={leftArrow} alt={"left arrow"} width={100} onClick={scrollNext}></Image></div>
        //         <div className="flex">
        //             {photos.map((item, index) => (
        //                 <Image src={item.src} alt={item.alt} key={index}/>
        //             ))}
        //         </div>
        //         <div><Image src={rightArrow} alt={"right arrow"} width={100}></Image></div>                
        //     </div>
        // </div>
    );
};

export default Snapshots;