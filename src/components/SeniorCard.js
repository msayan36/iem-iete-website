import React from "react";

const SeniorCard = ({ imgSrc, name, role, dsgn }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl my-10 cursor-pointer hover:-translate-y-5 transition-all">
      <figure>
        <img src={imgSrc} alt="Img" className="w-72" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold mb-10">{name}</h2>
        <div>
          <p className="text-xl mb-5 font-semibold">{role}</p>
          <p className="text-xl mb-5 font-semibold">{dsgn}</p>
        </div>
      </div>
    </div>
  );
};

export default SeniorCard;
