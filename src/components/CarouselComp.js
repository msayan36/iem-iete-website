import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import g_img_1 from "../img/gallery_img/g_img_1.jpg";
import g_img_2 from "../img/gallery_img/g_img_2.jpg";
import g_img_3 from "../img/gallery_img/g_img_3.jpg";

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
        <div className="relative h-screen cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
            style={{
              backgroundImage: `url(${g_img_1})`,
            }}
          />
        </div>
        <div className="relative h-screen cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
            style={{
              backgroundImage: `url(${g_img_2})`,
            }}
          />
        </div>
        <div className="relative h-screen cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
            style={{
              backgroundImage: `url(${g_img_3})`,
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
