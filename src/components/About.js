import banner from "../img/banner.jpg";

const About = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between w-[75rem] mx-auto"
      id="about"
    >
      <div className="w-11/12">
        <h2 className="text-4xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          ABOUT US
        </h2>
        <div className="descp flex items-center justify-between">
          <p className="text-lg text-justify mr-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            assumenda ex vel tempora esse eum unde veniam expedita ullam
            laborum, pariatur, sit itaque similique quos! Et velit eum culpa est
            minima aperiam natus voluptates labore assumenda repellat quas
            dolorem consectetur, illum, ullam fugit nulla mollitia, modi
            accusantium laudantium. Cumque, consequatur! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Reiciendis consequuntur odio quos
            pariatur fugiat earum qui explicabo. Magnam placeat consequatur
            iste, eveniet earum itaque? Ab quibusdam consequuntur eum
            perferendis! Ratione eveniet deserunt, laudantium rem veritatis illo
            quos quae cupiditate hic.
          </p>
          <img src={banner} alt="Banner" className="w-[30rem] ml-3" />
        </div>
      </div>
    </div>
  );
};

export default About;
