import event1 from "../img/event1.jpg";

const Events = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="events"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          EVENTS
        </h2>
        <div className="event_body lg:flex justify-center mx-5">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 lg:text-2xl text-xl font-bold text-primary-content">
              STUDENTS' FORUM INAUGURATION PROGRAM
            </h3>
            <p className="lg:text-lg text-base mb-5 text-justify">
              IEM-IETE Students’ Forum was inaugurated on 10th August 2022 at
              the in IETE Kolkata Centre. The student of IEM have became the
              members of ISF with the coordination of Dr.Susovan Jana.
              Dr.Jayanta Kumar Ray , Chairman of IETE Salt Lake Sub Centre was
              the Chief Guest. Other dignitaries present at the inaugural
              ceremony ,faculty members of various departments made their
              presence.
            </p>
          </div>
          <img
            src={event1}
            alt="Event 1"
            className="event_img lg:w-96 w-7/12 lg:ml-3 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
