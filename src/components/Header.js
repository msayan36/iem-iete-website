import iemLogo from "../img/iem_logo.jpeg";
import ieteLogo from "../img/iete_logo.jpg";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[75rem] mx-auto">
      <div className="my-16 w-11/12">
        <div className="flex justify-between w-3/4 mx-auto">
          <img src={iemLogo} alt="Iem Logo" className="w-24" />
          <div className="text-center">
            <h1 className="text-8xl text-accent font-bold">IEM - IETE</h1>
          </div>
          <img src={ieteLogo} alt="Iete Logo" className="w-24" />
        </div>
        <div className="mx-auto w-3/4 text-center my-3">
          <h2 className="text-4xl mb-3 font-semibold">STUDENTS' FORUM</h2>
          <p className="text-2xl mb-3">[REF. NO.: ISFC-1051]</p>
        </div>
        <div className="mx-auto w-3/4 text-center mt-10">
          <h2 className="text-4xl text-secondary font-semibold mb-3">
            INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA
          </h2>
          <p className="text-2xl">Gurukul Campus, Y-12, Salt Lake</p>
          <p className="text-2xl">
            Electronics Complex, Sector V, Kolkata-700091
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
