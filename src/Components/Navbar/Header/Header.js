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
import MainLogo from "../../../Assets/MainLogo.svg"

const Header = ({ toggle }) => {
  return (
    <Navbar className="navbar">
      <div className="navbar-content">
        <div className="res-nav">
          <img src={MainLogo} alt="" />
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

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/about"
            data-tip
            data-for="abouttip"
            id="navlinks"
          >
            <FaUserAlt />
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/works"
            data-tip
            data-for="worktip"
            id="navlinks"
          >
            <BsTrophyFill />
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/blogs"
            data-tip
            data-for="blogtip"
            id="navlinks"
          >
            <RiArticleFill />
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/contact"
            data-tip
            data-for="contacttip"
            id="navlinks"
          >
            <GrMail />
          </NavLink>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
