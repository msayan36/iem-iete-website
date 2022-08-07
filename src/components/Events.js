import event1 from "../img/event1.jpg";

const Events = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between w-[75rem] mx-auto"
      id="events"
    >
      <div className="w-11/12">
        <h2 className="text-4xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          EVENTS
        </h2>
        <div className="event_body flex justify-center mx-5">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 text-2xl font-bold text-primary-content">
              STUDENTS' FORUM INAUGURATION PROGRAM
            </h3>
            <p className="text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              facere incidunt doloribus numquam velit veniam enim assumenda
              libero, illo rem vel animi cum laudantium. Dolorum, optio? Ad
              fugiat possimus similique. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium sed ipsa maiores ea dolorum iste.
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              facere incidunt doloribus numquam velit veniam enim assumenda
              libero, illo rem vel animi cum laudantium. Dolorum, optio? Ad
              fugiat possimus similique. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium sed ipsa maiores ea dolorum iste.
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-lg mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              facere incidunt doloribus numquam velit veniam enim assumenda
              libero, illo rem vel animi cum laudantium. Dolorum, optio? Ad
              fugiat possimus similique. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Praesentium sed ipsa maiores ea dolorum iste.
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <img src={event1} alt="Event 1" className="event_img w-96 ml-3" />
        </div>
      </div>
    </div>
  );
};

export default Events;
