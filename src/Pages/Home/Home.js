import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Bounce from "react-reveal/Bounce";
import Resume from "../../Assets/Thrinath Ravula (1).pdf";
import Contact from "../Contact/Contact";
import About from "../About/About";
// import { FaFacebookF } from "react-icons/fa";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="hometext">
          <Bounce top>
            <div className="intro">Hi there, I'm</div>
          </Bounce>
          <Bounce top delay={40}>
            <div className="main-title">3 Nath </div>
          </Bounce>
          <div className="subtext">
            <Bounce top delay={60}>
              <p className="subtext-1">Brings ideas to life with code</p>
            </Bounce>
            <Bounce top delay={80}>
              <p className="subtext-2">
                Web developer. UI/UX Designer. Content Creator.
              </p>
            </Bounce>
          </div>
          <div className="btn-links">
            {" "}
            <Bounce top delay={100}>
              <Link to="/contact" className="button-27">
                Contact Me
              </Link>
              <a href={Resume} className="button-28" download>
                Download CV
              </a>
            </Bounce>
          </div>
        </div>
        <div className="social-icons">
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
        </div>
      </div>
      <About />
      <Contact />
    </>
  );
};

export default Home;
