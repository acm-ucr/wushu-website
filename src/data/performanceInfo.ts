interface PerformanceItem {
  imageSrc: string;
  title: string;
  date: string;
  description: string;
  imageOnLeft: boolean;
}

const performanceData: PerformanceItem[] = [
  {
    imageSrc: "/images/performances/2024 blossom performance.webp",
    title: "2024 ASPB - BLOSSOM PERFORMANCE",
    date: "June 15, 2024",
    description:
      "With the blooming spring, we kicked off the spring quarter of good times with a performance under the Bell Tower.",
    imageOnLeft: true,
  },
  {
    imageSrc: "/images/performances/2024 ccn.webp",
    title: "2024 CCN - CHINESE CULTURE NIGHT PERFORMANCE",
    date: "June 5, 2024",
    description:
      "We had our last performance of the year at CCN! Thank you to the CCN organizers for allowing us the honor to perform. Thank you so much to one of our members for the footage. Give a shoutout to our members who trained very hard for this!",
    imageOnLeft: false,
  },
  {
    imageSrc: "/images/performances/2024 asucr.webp",
    title: "2024 ASUCR - GLOBAL FAIR PERFORMANCE",
    date: "February 23, 2024",
    description:
      "We had a lot of fun wushu-ing outside at the Bell Tower :) Welcome some our members who are performing for the first time! Performed on February 23rd, 2024.",
    imageOnLeft: true,
  },
  {
    imageSrc: "/images/performances/2024 asps.webp",
    title: "2024 APSP - LUNAR NEW YEAR FESTIVAL PERFORMANCE",
    date: "February 15, 2024",
    description:
      "Thank you so much APSP for allowing us the honor of performing for your Lunar New Year event once again this year!",
    imageOnLeft: false,
  },
  {
    imageSrc: "/images/performances/2023 education abroad.webp",
    title: "2023 EDUCATION ABROAD - WORLD FEST PERFORMANCE",
    date: "December 2, 2023",
    description:
      "We had a lot of fun performing at UCR Education Abroad's showcase! The first of hopefully many more performances this year.",
    imageOnLeft: true,
  },
  {
    imageSrc: "/images/performances/2023 asps.webp",
    title: "2023 APSP - LUNAR NEW YEAR FESTIVAL PERFORMANCE",
    date: "February 26, 2023",
    description:
      "Our first performance of the year! Thank you APSP for letting us perform at your venue! We're excited to train harder for our next performances and do even better!",
    imageOnLeft: false,
  },
];

export default performanceData;
