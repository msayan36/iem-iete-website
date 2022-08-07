const Card = ({ img, name, role }) => {
  return (
    <div className="card w-fit bg-base-300 shadow-5xl cursor-pointer hover:-translate-y-4 transition-all">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-semibold">{role}</p>
      </div>
    </div>
  );
};

export default Card;
