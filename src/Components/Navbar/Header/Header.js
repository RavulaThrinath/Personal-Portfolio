// import React, { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
// import { IconContext } from "react-icons/lib";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";

const Header = ({ toggle }) => {
  return (
    <Navbar className="navbar">
      <div className="navbar-content">
        <Link className="Logo" to="/">
          <h1>3 NATH</h1>
          <span>Web Developer</span>
        </Link>
        <div className="hamburger" onClick={toggle}>
          <BsList />
        </div>
        <div className="navbar-links">
          <NavLink className="links" to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/works"
          >
            Works
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="social-icons">
          <a href="./">
            <FaFacebook />
          </a>
          <a href="./">
            <AiFillTwitterCircle />
          </a>
          <a href="./">
            <FaGithub />
          </a>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
