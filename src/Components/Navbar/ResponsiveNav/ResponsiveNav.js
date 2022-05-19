import React from "react";
import { Link } from "react-router-dom";
import "./ResponsiveNav.scss";

const ResponsiveNav = () => {
  const btnClick = () => {
    const inputCheck = document.getElementById("main-navigation-toggle");
    inputCheck.checked = !inputCheck.checked;
  };
  return (
    <>
      <input
        type="checkbox"
        id="main-navigation-toggle"
        className="btn btn--close"
        title="Toggle main navigation"
      />
      <label htmlFor="main-navigation-toggle">
        <span></span>
      </label>

      <nav id="main-navigation" className="nav-main">
        <ul className="menu">
          <li className="menu__item">
            <Link to="/" className="menu__link" onClick={btnClick}>
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/about" className="menu__link" onClick={btnClick}>
              About
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/works" className="menu__link" onClick={btnClick}>
              Work
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/blogs" className="menu__link" onClick={btnClick}>
              Blogs
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/contact" className="menu__link" onClick={btnClick}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveNav;
