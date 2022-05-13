import React from "react";
import { Link } from "react-router-dom";
import "./ResponsiveNav.css";

const ResponsiveNav = () => {
  const btnClick = () => {
    const inputCheck = document.getElementById("menu-icon");
    inputCheck.checked = !inputCheck.checked;
  };
  return (
    <div>
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
  );
};

export default ResponsiveNav;
