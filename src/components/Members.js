import Card from "./Card";
import SeniorCard from "./SeniorCard";
import CardMem from "./CardMem";
import sayan_img from "../img/sayan_img.jpg";
import sayan_adak_img from "../img/sayan_adak_img.jpg";
import sahin_img from "../img/sahin_img.jpg";
import soyeb_img from "../img/soyeb_img.jpg";
import sathi_img from "../img/sathi_img.jpg";
import subham_img from "../img/subham_img.jpg";
import anirban_das_img from "../img/anirban_das_img.jpg";
import moutushi_maam_img from "../img/moutushi_maam_img.jpg";
import susovan_sir_img from "../img/susovan_sir_img.jpg";
import soumyadeep_img from "../img/soumyadeep_img.jpg";
import rachana_img from "../img/rachana_img.jpg";
import somrik_img from "../img/somrik_img.png";
import studentData from "../data/studentData";

const Members = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="members"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          MEMBERS
        </h2>
        <div className="mem_list">
          {/* <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque unde
            eveniet earum eos fuga blanditiis accusamus, ad recusandae quia qui.
          </p> */}
          <div className="mng_committee mt-5 xs:mx-10 mx-5 mb-16">
            <h3 className="lg:text-2xl text-xl text-primary-content font-semibold">
              Management Committee [2022 - 2023]
            </h3>
            <div className="scenior_sec my-16 lg:mx-32 sm:mx-16">
              <SeniorCard
                imgSrc={anirban_das_img}
                name="Dr. Anirban Das"
                role="Nominated EC Member"
                dsgn="Treasurer of IETE Kolkata"
              />
              <SeniorCard
                imgSrc={moutushi_maam_img}
                name="Dr. Moutushi Singh"
                role="Faculty Advisor"
                dsgn="HOD of Department of IT and IOTCSBT and IOT"
              />
              <SeniorCard
                imgSrc={susovan_sir_img}
                name="Dr. Susovan Jana"
                role="Faculty Coordinator"
                dsgn="Assistant Professor Department of IT"
              />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 mt-10 sm:mx-10">
              <Card img={sayan_img} name="Sayan Das" role="Chairman" />
              <Card img={sahin_img} name="Sahin Rizwana" role="Vice-Chairman" />
              <Card
                img={soyeb_img}
                name="Soyeb Sarkar"
                role="Hony. Secretary"
              />
              <Card img={sayan_adak_img} name="Sayan Adak" role="Treasurer" />
              <Card
                img={sathi_img}
                name="Sathi Mahata"
                role="Program Coordinator"
              />
              <Card
                img={subham_img}
                name="Subham Saha"
                role="Joint Program Coordinator"
              />
            </div>
          </div>
          <div className="mng_committee mt-5 xs:mx-10 mx-5 mb-16">
            <h3 className="text-2xl text-primary-content font-semibold">
              Technical Committee [2022 - 2023]
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-5 mt-10 sm:mx-10">
              <Card
                img={soumyadeep_img}
                name="Saumyadeep Chakrabarty"
                role="Technical Administrator"
              />
              <Card
                img={rachana_img}
                name="Rachana Kumari"
                role="Graphics Designer"
              />
              <Card
                img={somrik_img}
                name="Somrik Kar"
                role="Social Media Manager"
              />
            </div>
          </div>
          <div className="mng_committee mt-5 xs:mx-10 mx-5">
            <h3 className="text-2xl text-primary-content font-semibold">
              All Members
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-2 xs:gap-5 gap-2 mt-10 lg:mx-10 sm:mx-3">
              {studentData.map((data, idx) => {
                return (
                  <CardMem
                    name={data.name}
                    refNo={data.refNo}
                    memNo={data.memNo}
                    key={idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
