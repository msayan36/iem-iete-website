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

const Members = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between w-[75rem] mx-auto"
      id="members"
    >
      <div className="w-11/12">
        <h2 className="text-4xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          MEMBERS
        </h2>
        <div className="mem_list">
          {/* <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque unde
            eveniet earum eos fuga blanditiis accusamus, ad recusandae quia qui.
          </p> */}
          <div className="mng_committee mt-5 mx-10 mb-16">
            <h3 className="text-2xl text-primary-content font-semibold">
              Management Committee [2022 - 2023]
            </h3>
            <div className="scenior_sec my-16 mx-32">
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
            <div className="grid grid-cols-3 gap-10 mt-10 mx-10">
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
                name="Sathi Mahato"
                role="Program Coordinator"
              />
              <Card
                img={subham_img}
                name="Subham Saha"
                role="Joint Program Coordinator"
              />
            </div>
          </div>
          <div className="mng_committee mt-5 mx-10 mb-16">
            <h3 className="text-2xl text-primary-content font-semibold">
              Technical Committee [2022 - 2023]
            </h3>
            <div className="grid grid-cols-3 gap-10 mt-10 mx-10">
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
          <div className="mng_committee mt-5 mx-10">
            <h3 className="text-2xl text-primary-content font-semibold">
              All Members
            </h3>
            <div className="grid grid-cols-3 gap-5 mt-10 mx-10">
              <CardMem
                name="JYOTIPRAKASH PORE"
                refNo="ISFC-1051"
                memNo="245804"
              />
              <CardMem name="KSHITIJ GUPTA" refNo="ISFC-1051" memNo="245805" />
              <CardMem name="ROHIT KUMAR" refNo="ISFC-1051" memNo="245806" />
              <CardMem name="SATHI MAHATA" refNo="ISFC-1051" memNo="245807" />
              <CardMem
                name="SAUMYADEEP CHAKRABARTY"
                refNo="ISFC-1051"
                memNo="245808"
              />
              <CardMem
                name="TINA MUKHOPADHYAY"
                refNo="ISFC-1051"
                memNo="245809"
              />
              <CardMem
                name="PRATYUSH KUMAR SINGH"
                refNo="ISFC-1051"
                memNo="245810"
              />
              <CardMem name="PANKAJ KUMAR" refNo="ISFC-1051" memNo="245811" />
              <CardMem
                name="ADITYA KUMAR SEN"
                refNo="ISFC-1051"
                memNo="245814"
              />
              <CardMem name="SOYEB SARKAR" refNo="ISFC-1051" memNo="245815" />
              <CardMem name=" MD AZHARUDDIN" refNo="ISFC-1051" memNo="245816" />
              <CardMem name="SHAHIN RIZWANA" refNo="ISFC-1051" memNo="245817" />
              <CardMem name="AMAN KUMAR" refNo="ISFC-1051" memNo="245818" />
              <CardMem
                name="ANKUSH CHAKRABORTY"
                refNo="ISFC-1051"
                memNo="245819"
              />
              <CardMem
                name="SOUMADEEP SARKAR"
                refNo="ISFC-1051"
                memNo="245820"
              />
              <CardMem name="SAHIL HOSSAIN" refNo="ISFC-1051" memNo="245821" />
              <CardMem name="PARIJAT DAS" refNo="ISFC-1051" memNo="245822" />
              <CardMem name="SAYAN DAS" refNo="ISFC-1051" memNo="245823" />
              <CardMem name="RACHANA KUMARI" refNo="ISFC-1051" memNo="245824" />
              <CardMem name="SUBHAM SAHA" refNo="ISFC-1051" memNo="245825" />
              <CardMem name="SOMRIK KAR" refNo="ISFC-1051" memNo="245826" />
              <CardMem
                name="AASTIK DAS GUPTA"
                refNo="ISFC-1051"
                memNo="245829"
              />
              <CardMem name="AASHISH GAUTAM" refNo="ISFC-1051" memNo="245830" />
              <CardMem name="SAYAN ADAK" refNo="ISFC-1051" memNo="245812" />
              <CardMem name="AVIK PANDA" refNo="ISFC-1051" memNo="245813" />
              <CardMem
                name="SOURAV PRAMANIK"
                refNo="ISFC-1051"
                memNo="245827"
              />
              <CardMem
                name="NASHIMUDDIN MOLLAH"
                refNo="ISFC-1051"
                memNo="245828"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
