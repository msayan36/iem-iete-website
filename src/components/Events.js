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
              IEM-IETE Students’ Forum was inaugurated on 10th August 2022 at
              the in IETE Kolkata Centre. The student of IEM have became the
              members of ISF with the coordination of Dr.Susovan Jana.
              Dr.Jayanta Kumar Ray , Chairman of IETE Salt Lake Sub Centre was
              the Chief Guest. Other dignitaries present at the inaugural
              ceremony ,faculty members of various departments made their
              presence.
            </p>
          </div>
          <img src={event1} alt="Event 1" className="event_img w-96 ml-3" />
        </div>
      </div>
    </div>
  );
};

export default Events;
