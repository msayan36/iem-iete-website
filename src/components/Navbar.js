import iemLogo from "../img/iem_logo.jpeg";

const Navbar = () => {
  return (
    <nav className="z-10 navbar shadow-2xl bg-base-100 w-full flex justify-between items-center text-lg top-0 sticky">
      <div className="flex items-center justify-between w-[75rem] mx-auto">
        <div className="dropdown sm:hidden">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="/">
            <img
              src={iemLogo}
              alt="IEM_LOGO"
              className="w-15 h-11 hover:scale-110 transition-all"
            />
          </a>
        </div>
        <div>
          <ul className="menu menu-horizontal p-0 hidden sm:flex">
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li tabIndex="0">
            <a href="/">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a href="/">Submenu 1</a>
              </li>
              <li>
                <a href="/">Submenu 2</a>
              </li>
            </ul>
          </li> */}
            <li>
              <a href="#members">Members</a>
            </li>
            <li>
              <a href="#announcements">Announcements</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#media">Media</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
