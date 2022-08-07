import CarouselComp from "./CarouselComp";

const Media = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between w-[75rem] mx-auto"
      id="media"
    >
      <div className="w-11/12">
        <h2 className="text-4xl mb-10 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          GALLERY
        </h2>
        <CarouselComp />
      </div>
    </div>
  );
};

export default Media;
