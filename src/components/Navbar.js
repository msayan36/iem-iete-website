import { useState } from "react";
import iemLogo from "../img/iem_logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="z-20 navbar shadow-2xl bg-base-100 w-full flex justify-between items-center text-lg top-0 sticky sm:px-0 px-10">
      <div className="flex items-center justify-between w-[75rem] mx-auto">
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
        <div
          onClick={() => setToggleNav((toggleNav) => !toggleNav)}
          className="sm:hidden"
        >
          {toggleNav ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
        <div
          className={`absolute bg-base-100 top-16 h-screen p-10 right-0 rounded-md shadow-2xl ${
            toggleNav ? "visible opacity-100" : "invisible opacity-0"
          } transition-all`}
        >
          <ul className="menu flex flex-col items-start justify-center">
            <li>
              <a href="#about">About</a>
            </li>
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
