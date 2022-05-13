import "./Header.css";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RiArticleFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";
import { motion } from "framer-motion";
import ResponsiveNav from "../ResponsiveNav/ResponsiveNav";

const Header = () => {
  // const audioClick = () => {
  //   var sound = document.getElementById("link");
  //   sound.play();
  // };
  return (
    <>
      {/* <audio
        id="link"
        src="http://ivang-design.com/svg-load/menu/link.mp3"
        preload="auto"
      ></audio> */}
      <Navbar className="navbar">
        <motion.div
          className="navbar-content"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
        >
          <div className="navbar-links">
            <NavLink  className="links" to="/">
              <AiFillHome />
            </NavLink>

            <NavLink
              // onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/about"
            >
              <FaUserAlt />
            </NavLink>

            <NavLink
              // onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/works"
            >
              <BsTrophyFill />
            </NavLink>

            <NavLink
              // onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/blogs"
            >
              <RiArticleFill />
            </NavLink>

            <NavLink
              // onClick={audioClick}
              className={({ isActive }) => (isActive ? "active" : "links")}
              to="/contact"
            >
              <GrMail />
            </NavLink>
          </div>
        </motion.div>
      </Navbar>
      <div className="res-nav">
        <ResponsiveNav />
      </div>
    </>
  );
};

export default Header;
