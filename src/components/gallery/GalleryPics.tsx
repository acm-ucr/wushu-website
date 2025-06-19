import image1 from "@/public/images/gallery/gallery_1.webp";
import image2 from "@/public/images/gallery/gallery_2.webp";
import image3 from "@/public/images/gallery/gallery_3.webp";
import image4 from "@/public/images/gallery/gallery_4.webp";
import image5 from "@/public/images/gallery/gallery_5.webp";
import image6 from "@/public/images/gallery/gallery_6.webp";
import image7 from "@/public/images/gallery/gallery_7.webp";
import image8 from "@/public/images/gallery/gallery_8.webp";
import image9 from "@/public/images/gallery/gallery_9.webp";
import image10 from "@/public/images/gallery/gallery_10.webp";
import image11 from "@/public/images/gallery/gallery_11.webp";
import image12 from "@/public/images/gallery/gallery_12.webp";
import image13 from "@/public/images/gallery/gallery_13.webp";
import image14 from "@/public/images/gallery/gallery_14.webp";
import image15 from "@/public/images/gallery/gallery_15.webp";
import image16 from "@/public/images/gallery/gallery_16.webp";
import image17 from "@/public/images/gallery/gallery_17.webp";
import image18 from "@/public/images/gallery/gallery_18.webp";
import image19 from "@/public/images/gallery/gallery_19.webp";
import image20 from "@/public/images/gallery/gallery_20.webp";
import image21 from "@/public/images/gallery/gallery_group2.webp";
import image22 from "@/public/images/gallery/gallery_group1.webp";
import image23 from "@/public/images/gallery/gallery_fan.webp";
import image24 from "@/public/images/gallery/gallery_bottom.webp";
import Header from "@/components/Header";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
];

const GalleryPics = () => {
  return (
    <div className="flex w-screen">
      <div className="w-full">
        <Header title="GALLERY" isRed={true} />
        <div className="grid grid-cols-1 gap-6 px-5 md:grid-cols-4 md:px-30">
          {images.map((img, idx) => {
            return (
              <img
                key={idx}
                src={img.src}
                alt={`Gallery image ${idx + 1}`}
                className={`object-cover${idx === 20 || idx === 21 || idx === 23 ? "col-span-2" : ""}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryPics;
