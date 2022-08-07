import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        className="z-10 h-96 md:w-11/12 mx-auto"
        ssr={true}
      >
        <div className="relative h-screen cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
            style={{
              backgroundImage: `url(https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=)`,
            }}
          />
        </div>
        <div className="relative h-screen cursor-pointer hover:opacity-90">
          <div
            className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-screen"
            style={{
              backgroundImage: `url(https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg)`,
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
