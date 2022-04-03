import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [arrow, setArrow] = useState(true);
  const arrowVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setArrow(false);
    } else if (scrolled <= 500) {
      setArrow(true);
    }
  };
  window.addEventListener("scroll", arrowVisible);
  return (
    <>
      <div>
        <div className="hometext">
          <div className="intro" data-aos="fade-right" data-aos-delay="200">
            Hi there, I'm
          </div>
          <div
            className="main-title"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            3 Nath
          </div>

          <div className="subtext">
            <p className="subtext-1">Brings ideas to life with code</p>
            <p className="subtext-2">
              Web developer. UI/UX Designer. Content Creator.
            </p>
          </div>
          <div className="btn-links">
            <Link to="/contact" className="button-27">
              Contact Me
            </Link>
            <Link to="/contact" className="button-28">
              Download CV
            </Link>
          </div>
        </div>
        {/*<div className="social-icons">
          <div className="social-icons-border">
            <a href="./">
              <RiFacebookFill />
            </a>
            <a href="./">
              <RiInstagramFill />
            </a>
            <a href="./">
              <RiTwitterFill />
            </a>
          </div>
        </div>*/}
        <div className="box" style={{ display: arrow ? "inline" : "none" }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/*  <About />
      <Contact />*/}
    </>
  );
};

export default Home;
