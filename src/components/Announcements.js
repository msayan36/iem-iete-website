const Announcements = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="announcements"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          ANNOUNCEMENTS
        </h2>
        <ul className="ann_body mx-10 mt-5">
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc">
            STUDENTS' FORUM INAUGURATION PROGRAM - 10th August, 2022
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
