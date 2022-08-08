import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 footer-center p-10 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">
          About
        </a>
        <a href="#members" className="link link-hover">
          Members
        </a>
        <a href="#announcements" className="link link-hover">
          Announcements
        </a>
        <a href="#events" className="link link-hover">
          Events
        </a>
        <a href="#media" className="link link-hover">
          Media
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/iem-iete-students-forum-8b3145248/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin className="text-2xl hover:text-accent hover:scale-110 transition-all" />
          </a>
          <a href="/">
            <FaYoutube className="text-2xl hover:text-accent hover:scale-110 transition-all" />
          </a>
          <a
            href="https://www.facebook.com/107098072104931/posts/107100562104682/?substory_index=0&mibextid=ad618h"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookF className="text-2xl hover:text-accent hover:scale-110 transition-all" />
          </a>
        </div>
      </div>
      <div>
        <p>
          Copyright © 2022 - All right reserved by IEM - IETE Students' Forum
        </p>
      </div>
      <div>
        <p className="italic">
          Designed and Developed by{" "}
          <span>
            <a
              href="https://sayanmunshi.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-bold text-accent underline hover:no-underline hover:text-accent-focus"
            >
              Sayan Munshi
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
