import iemLogo from "../img/iem_logo.jpeg";
import ieteLogo from "../img/iete_logo.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto">
      <div className="my-16 lg:w-11/12 w-9/12">
        <div className="flex justify-between xs:items-start items-center lg:w-3/4 sm:w-4/5 w-full sm:mx-auto">
          <img src={iemLogo} alt="Iem Logo" className="lg:w-24 w-16" />
          <div className="text-center">
            <h1 className="lg:text-8xl sm:text-6xl xs:text-5xl text-4xl text-accent font-bold mx-1">
              IEM - IETE
            </h1>
          </div>
          <img
            src={ieteLogo}
            alt="Iete Logo"
            className="lg:w-24 xs:w-16 w-14"
          />
        </div>
        <div className="mx-auto sm:w-3/4 w-full text-center my-3">
          <h2 className="lg:text-4xl xs:text-2xl text-xl mb-3 font-semibold">
            STUDENTS' FORUM
          </h2>
          <p className="lg:text-2xl xs:text-xl text-lg mb-3">
            [REF. NO.: ISFC-1051]
          </p>
        </div>
        <div className="mx-auto sm:w-3/4 w-full text-center mt-10">
          <h2 className="lg:text-4xl xs:text-2xl text-xl text-secondary font-semibold mb-3">
            INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA
          </h2>
          <p className="lg:text-2xl xs:text-xl text-lg">
            Gurukul Campus, Y-12, Salt Lake
          </p>
          <p className="lg:text-2xl xs:text-xl text-lg">
            Electronics Complex, Sector V, Kolkata-700091
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
