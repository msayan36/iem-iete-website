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
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc my-5 uppercase">
            IETE Students’ Day Celebration 2023 (Hybrid Mode) - 02 February 2023
            | Time 4:10 PM onwards
          </li>
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc my-5 uppercase">
            Quiz Competition- “Quiz Arena 2023” - 19 January 2023 to 20 January
            2023 | Time 04:00 PM to 05:30 PM
          </li>
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc my-5 uppercase">
            5 Day Workshop on “Remastering C Language” - 17 October 2022 to 21
            October 2022 | Time 04:00 PM to 05:00 PM
          </li>
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc my-5">
            CODING COMPETITION IN COLLABORATION WITH NEWTWON SCHOOL - 11th
            September, 2022 | 7:00 PM - 10:00 PM (IST)
          </li>
          <li className="lg:text-lg text-base text-primary-content font-semibold list-disc my-5">
            STUDENTS' FORUM INAUGURATION PROGRAM - 10th August, 2022
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
