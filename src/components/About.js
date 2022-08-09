import banner from "../img/banner.jpg";

const About = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="about"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          ABOUT US
        </h2>
        <div className="descp lg:flex items-center justify-between">
          <p className="lg:text-lg text-base text-justify lg:mr-3">
            The Institution of Electronics and Telecommunication Engineers
            (IETE) is India's leading recognized professional society devoted to
            the advancement of Science and Technology of Electronics,
            Telecommunication & IT. IEM-IETE Students' Branch indulge in
            activities and awareness through the conduction of Technical
            seminars, workshops, conferences, and other technical and cultural
            activities leading to promotion of IETE and advancement in
            technology. IETE Students’ Forum was inaugurated on 10th August 2022
            at the IETE Kolkata Centre. The student of IEM have became the
            members of ISF with the coordination of Dr.Susovan Jana. Dr.Jayanta
            Kumar Ray , Chairman of IETE Salt Lake Sub Centre was the Chief
            Guest. Other dignitaries present at the inaugural ceremony ,faculty
            members of various departments made their presence.
          </p>
          <img
            src={banner}
            alt="Banner"
            className="lg:w-[30rem] xs:w-8/12 w-10/12 lg:ml-3 mx-auto lg:mx-0 mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
