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
          <img src={banner} alt="Banner" className="w-[30rem] ml-3" />
        </div>
      </div>
    </div>
  );
};

export default About;
