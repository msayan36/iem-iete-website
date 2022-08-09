const Card = ({ img, name, role }) => {
  return (
    <div className="card bg-base-300 shadow-5xl cursor-pointer hover:-translate-y-4 transition-all">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="lg:text-lg text-base font-bold text-center">{name}</h2>
        <p className="lg:text-base text-sm font-semibold text-center">{role}</p>
      </div>
    </div>
  );
};

export default Card;
