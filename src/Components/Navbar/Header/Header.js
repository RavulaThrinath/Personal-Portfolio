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
import ReactTooltip from "react-tooltip";

const Header = ({ toggle }) => {
  return (
    <Navbar className="navbar">
      <div className="navbar-content">
        <div className="hamburger" onClick={toggle}>
          <BsList />
        </div>
        <div className="navbar-links">
          <NavLink className="links" to="/" data-tip data-for="hometip">
            <AiFillHome />
          </NavLink>
          <ReactTooltip
            id="hometip"
            place="right"
            effect="solid"
            textColor="black"
            backgroundColor="#00e5b0"
          >
            Home
          </ReactTooltip>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/about"
            data-tip
            data-for="abouttip"
          >
            <FaUserAlt />
          </NavLink>
          <ReactTooltip
            id="abouttip"
            place="right"
            effect="solid"
            textColor="black"
            backgroundColor="#00e5b0"
          >
            About
          </ReactTooltip>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/works"
            data-tip
            data-for="worktip"
          >
            <BsTrophyFill />
          </NavLink>
          <ReactTooltip
            id="worktip"
            place="right"
            effect="solid"
            textColor="black"
            backgroundColor="#00e5b0"
          >
            Works
          </ReactTooltip>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/blogs"
            data-tip
            data-for="blogtip"
          >
            <RiArticleFill />
          </NavLink>
          <ReactTooltip
            id="blogtip"
            place="right"
            effect="solid"
            textColor="black"
            backgroundColor="#00e5b0"
          >
            Blogs
          </ReactTooltip>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/contact"
            data-tip
            data-for="contacttip"
          >
            <GrMail />
          </NavLink>
          <ReactTooltip
            id="contacttip"
            place="right"
            effect="solid"
            textColor="black"
            backgroundColor="#00e5b0"
          >
            Contact
          </ReactTooltip>
        </div>
        {/* <div className="social-icons">
          <a href="./">
            <FaFacebook />
          </a>
          <a href="./">
            <AiFillTwitterCircle />
          </a>
          <a href="./">
            <FaGithub />
          </a>
        </div>*/}
      </div>
    </Navbar>
  );
};

export default Header;
