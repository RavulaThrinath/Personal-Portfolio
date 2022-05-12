import "./Header.css";
import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { RiArticleFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Header = () => {
  const btnClick = () => {
    const inputCheck = document.getElementById("menu-icon");
    inputCheck.checked = !inputCheck.checked;
  };

  const audioClick = () => {
    var sound = document.getElementById("link");
    sound.play();
  };
  return (
    <>
      <audio
        id="link"
        src="http://ivang-design.com/svg-load/menu/link.mp3"
        preload="auto"
      ></audio>
      <Navbar className="navbar">
        <motion.div
          className="navbar-content"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
        >
          <div className="navbar-links">
            <NavLink
              onClick={audioClick}
              className="links"
              to="/"
              id="navlinks"
            >
              <AiFillHome />
            </NavLink>

            <NavLink
              onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/about"
              id="navlinks"
            >
              <FaUserAlt />
            </NavLink>

            <NavLink
              onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/works"
              id="navlinks"
            >
              <BsTrophyFill />
            </NavLink>

            <NavLink
              onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/blogs"
              id="navlinks"
            >
              <RiArticleFill />
            </NavLink>

            <NavLink
              onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/contact"
              id="navlinks"
            >
              <GrMail />
            </NavLink>
          </div>
        </motion.div>
      </Navbar>
      <div className="res-nav">
        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
          <ul className="pt-5">
            <li>
              <Link onClick={btnClick} to="./">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={btnClick} to="./about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={btnClick} to="./works">
                Work
              </Link>
            </li>
            <li>
              <Link onClick={btnClick} to="./blogs">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={btnClick} to="./contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
