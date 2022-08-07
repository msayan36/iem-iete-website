const Announcements = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between w-[75rem] mx-auto"
      id="announcements"
    >
      <div className="w-11/12">
        <h2 className="text-4xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          ANNOUNCEMENTS
        </h2>
        <ul className="ann_body mx-10">
          <li className="text-lg text-primary-content font-semibold list-disc">
            STUDENTS' FORUM INAUGURATION PROGRAM - 10th August, 2022
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
