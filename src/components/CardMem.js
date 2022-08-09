const CardMem = ({ name, refNo, memNo }) => {
  return (
    <div className="card bg-base-300 cursor-pointer hover:-translate-y-3 transition-all">
      <div className="card-body">
        <p className="lg:text-xl xs:text-base text-sm font-bold">
          Name: {name}
        </p>
        <p className="lg:text-lg xs:text-sm text-xs font-semibold">
          Ref. No.: {refNo}
        </p>
        <p className="lg:text-lg xs:text-sm text-xs font-semibold">
          Mem. No.: {memNo}
        </p>
      </div>
    </div>
  );
};

export default CardMem;
