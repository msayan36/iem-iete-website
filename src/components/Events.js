import event1 from "../img/event1.jpg";
import event2 from "../img/event2.jpeg";
import event3 from "../img/event3.png";
import event4 from "../img/event4.png";
import event5 from "../img/event5.png";

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
        <div className="event_body lg:flex justify-center mx-5 my-20">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 lg:text-2xl text-xl font-bold text-primary-content uppercase">
              IETE Students’ Day Celebration 2023 (Hybrid Mode)
            </h3>
            <p className="lg:text-lg text-base mb-5 text-justify">
              IEM-IETE Students' Forum celebrated IETE Students' Day at Seminar
              Hall 3, Gurukul Campus, IEM, Kolkata from 4:10 PM onwards. Prof.
              Dr. Moutushi Singh delivered the welcome address. Prof. Dr.
              Debashis De, Chairman IETE, Kolkata, Dr. Aniruddha Nag, Secretary,
              IETE, Kolkata, Prof. Dr. Jyoti Sekhar Banerjee and other
              dignitaries were present in virtual mode and enlightened our
              students with their talk. Prof. Subhabrata Sengupta also delivered
              a talk in this event. Finally, certificate has been presented to
              the new members of IEM-IETE Students' Forum and organizing
              students. Dr. Susovan Jana concluded the event with a vote of
              thanks.
            </p>
          </div>
          <img
            src={event5}
            alt="Event 5"
            className="event_img lg:w-[30rem] w-7/12 lg:ml-3 mx-auto"
          />
        </div>
        <div className="event_body lg:flex justify-center mx-5 my-20">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 lg:text-2xl text-xl font-bold text-primary-content uppercase">
              Quiz Competition- “Quiz Arena 2023”
            </h3>
            <p className="lg:text-lg text-base mb-5 text-justify">
              AIt was two day event, on the first day there were two rounds and
              on second day semi-final and finals were organised. Questions were
              covered from all the domains including movies, sports, music,
              science and technology. Total 16 students with 8 teams
              participated in this event. This event was made successful only
              with the active participation of our IETE members and organising
              committee. The “Straw Hats” win this quiz competition and were
              awarded with famous novels and certificates by our beloved HOD of
              IT, Dr. Motushi Singh. While distributing certificates Prof. Dr.
              Motushi Singh, HOD of IT and Prof. Subhabrata Sengupta have
              enlightened and appreciated our students.
            </p>
          </div>
          <img
            src={event4}
            alt="Event 4"
            className="event_img lg:w-96 w-7/12 lg:ml-3 mx-auto"
          />
        </div>
        <div className="event_body lg:flex justify-center mx-5 my-20">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 lg:text-2xl text-xl font-bold text-primary-content uppercase">
              5 Day Workshop on “Remastering C Language”
            </h3>
            <p className="lg:text-lg text-base mb-5 text-justify">
              Abstract Department of IT, CSE (IoT), CSE (IoTCSBT) and IEM-IETE
              Students' Forum jointly organized a 5 Day workshop on "Remastering
              C Language”. This even was specially designed for Lateral non-CSE
              background students. The students have really enjoyed the hands-on
              programming experience during this workshop. Dr. Moutushi Singh,
              HoD- IT, CSE (IoT), CSE (IoTCSBT) given a very motivational
              closing message of this event. Dr. Avipsita Chatterjee given vote
              of thanks.
            </p>
          </div>
          <img
            src={event3}
            alt="Event 3"
            className="event_img lg:w-96 w-7/12 lg:ml-3 mx-auto"
          />
        </div>
        <div className="event_body lg:flex justify-center mx-5 my-20">
          <div className="event_det mr-3">
            <h3 className="text-center my-5 lg:text-2xl text-xl font-bold text-primary-content">
              CODING COMPETITION IN COLLABORATION WITH NEWTWON SCHOOL
            </h3>
            <p className="lg:text-lg text-base mb-5 text-justify">
              IEM-IETE STUDENTS' FORUM in collaboration with NEWTON SCHOOL is
              going to organize a coding competition which helps to improve the
              students' programming skills and directly prepare them for Coding
              Interview, online assessment and other coding Competitions.
              <br />
              Contest Details:-
              <br />
              Date:- 11 September 2022
              <br />
              Time:- 7:00 pm to 10:00 pm (IST)
              <br />
              No of Questions:- 06
            </p>
          </div>
          <img
            src={event2}
            alt="Event 2"
            className="event_img lg:w-96 w-7/12 lg:ml-3 mx-auto"
          />
        </div>
        <div className="event_body lg:flex justify-center mx-5 my-20">
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
