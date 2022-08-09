import CarouselComp from "./CarouselComp";

const Media = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="media"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl mb-10 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          GALLERY
        </h2>
        <CarouselComp />
      </div>
    </div>
  );
};

export default Media;
