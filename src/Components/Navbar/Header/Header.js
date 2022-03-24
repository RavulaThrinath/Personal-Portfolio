// import React, { useState, useEffect } from "react";
import "./Header.css";
import { Navbar } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RiArticleFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsTrophyFill } from "react-icons/bs";
// import ReactTooltip from "react-tooltip";

const Header = ({ toggle }) => {
  return (
    <Navbar className="navbar">
      <div className="navbar-content">
        <div className="res-nav">
          <h1>3 Nath</h1>
          <div className="hamburger" onClick={toggle}>
            <BsList />
          </div>
        </div>
        <div className="navbar-links">
          <NavLink
            className="links"
            to="/"
            data-tip
            data-for="hometip"
            id="navlinks"
          >
            <AiFillHome />
          </NavLink>
          {/*<ReactTooltip
            id="hometip"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="#27496d"
          >
            Home
          </ReactTooltip>*/}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/about"
            data-tip
            data-for="abouttip"
            id="navlinks"
          >
            <FaUserAlt />
          </NavLink>
          {/*<ReactTooltip
            id="abouttip"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="#27496d"
          >
            About
          </ReactTooltip>*/}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/works"
            data-tip
            data-for="worktip"
            id="navlinks"
          >
            <BsTrophyFill />
          </NavLink>
          {/*<ReactTooltip
            id="worktip"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="#27496d"
          >
            Works
          </ReactTooltip>*/}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/blogs"
            data-tip
            data-for="blogtip"
            id="navlinks"
          >
            <RiArticleFill />
          </NavLink>
          {/*<ReactTooltip
            id="blogtip"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="#27496d"
          >
            Blogs
          </ReactTooltip>*/}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/contact"
            data-tip
            data-for="contacttip"
            id="navlinks"
          >
            <GrMail />
          </NavLink>
          {/* <ReactTooltip
            id="contacttip"
            place="right"
            effect="solid"
            textColor="#fff"
            backgroundColor="#27496d"
          >
            Contact
          </ReactTooltip>*/}
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
