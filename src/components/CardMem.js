const CardMem = ({ name, refNo, memNo }) => {
  return (
    <div className="card bg-base-300 cursor-pointer hover:-translate-y-3 transition-all">
      <div className="card-body">
        <p className="text-xl font-bold">Name: {name}</p>
        <p className="text-lg font-semibold">Ref. No.: {refNo}</p>
        <p className="text-lg font-semibold">Mem. No.: {memNo}</p>
      </div>
    </div>
  );
};

export default CardMem;
