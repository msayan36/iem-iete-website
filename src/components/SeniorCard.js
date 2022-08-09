const SeniorCard = ({ imgSrc, name, role, dsgn }) => {
  return (
    <div className="card lg:card-side bg-base-300 shadow-xl my-10 cursor-pointer hover:-translate-y-5 transition-all">
      <figure>
        <img src={imgSrc} alt="Img" className="lg:w-72 w-52 mt-5 lg:mt-0" />
      </figure>
      <div className="card-body mx-auto">
        <h2 className="lg:text-3xl text-xl font-bold mb-10 text-center">
          {name}
        </h2>
        <div>
          <p className="lg:text-xl text-lg mb-5 font-semibold text-center">
            {role}
          </p>
          <p className="lg:text-xl text-lg mb-5 font-semibold text-center">
            {dsgn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeniorCard;
