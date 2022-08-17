import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import g_img_1 from "../img/gallery_img/g_img_1.jpg";
import g_img_2 from "../img/gallery_img/g_img_2.jpg";
import g_img_3 from "../img/gallery_img/g_img_3.jpg";
import g_img_4 from "../img/gallery_img/g_img_4.jpg";
import g_img_5 from "../img/gallery_img/g_img_5.jpg";
import g_img_6 from "../img/gallery_img/g_img_6.jpg";
import g_img_7 from "../img/gallery_img/g_img_7.jpg";
import g_img_8 from "../img/gallery_img/g_img_8.jpg";
import g_img_9 from "../img/gallery_img/g_img_9.jpg";
import g_img_10 from "../img/gallery_img/g_img_10.jpg";
import g_img_11 from "../img/gallery_img/g_img_11.jpg";
import g_img_12 from "../img/gallery_img/g_img_12.jpg";
import g_img_13 from "../img/gallery_img/g_img_13.jpg";
import g_img_14 from "../img/gallery_img/g_img_14.jpg";

const CarouselComp = ({ blogData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-12 -z-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div>
      <Carousel
        infinite={true}
        CustomLeftArrow={customLeftArrow}
        CustomRightArrow={customRightArrow}
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
        itemClass="px-4"
        className="z-10 h-fit md:w-full mx-auto"
        ssr={true}
      >
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_1})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_2})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_3})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_4})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_5})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_6})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_7})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_8})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_9})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_10})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_11})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_12})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_13})`,
            }}
          />
        </div>
        <div className="relative lg:h-[30rem] xs:h-[20rem] h-[10rem] cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full lg:h-[30rem] xs:h-[20rem] h-[10rem]"
            style={{
              backgroundImage: `url(${g_img_14})`,
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
