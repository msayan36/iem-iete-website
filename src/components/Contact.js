const Contact = () => {
  return (
    <div
      className="mb-10 pt-20 flex flex-col items-center justify-between lg:w-[75rem] w-screen mx-auto"
      id="contact"
    >
      <div className="lg:w-11/12 sm:w-9/12 w-11/12">
        <h2 className="lg:text-4xl text-2xl mb-5 text-left font-bold text-accent border-b-4 border-b-accent w-fit">
          GET IN TOUCH
        </h2>
        <div className="mx-10">
          <p className="xs:text-lg text-base">
            In case of any query do reach out to us in the given below details.
          </p>
          <div className="my-5">
            <p className="xs:text-lg text-base">
              <span className="text-primary-content font-semibold">Email:</span>{" "}
              iemiete2022@gmail.com / susovan.jana@iemcal.com
            </p>
            <p className="xs:text-lg text-base">
              <span className="text-primary-content font-semibold">
                Mobile No.:
              </span>{" "}
              (+91)9748052998
            </p>
          </div>
          <p className="xs:text-lg text-base mb-5">Or message us from here.</p>
          <form
            action="https://formsubmit.co/iemiete2022@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for contacting with us"
            />
            <input
              type="hidden"
              name="_next"
              value="https://iem-iete-students-forum.netlify.app/"
            />
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-primary-content"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-primary-content"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-primary-content"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="btn flex mx-auto bg-accent border-0 xs:py-2 xs:px-8 py-1 px-4 focus:outline-none hover:bg-accent-focus rounded xs:text-lg text-base"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
