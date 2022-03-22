import React from "react";
import "./About.css";
import AboutImage from "../../Assets/About.svg";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Skills from "./Skills/Skills"

const About = () => {
  return (
    <div>
      <div className="fake-title-parent">
        <h1 className="fake-title">About</h1>
      </div>
      <div className="about-container">
        <Bounce top>
          <div className="about-image">
            <img src={AboutImage} alt="" />
          </div>
        </Bounce>
        <div className="About-main-text">
          <Bounce bottom>
            <p>
              Hi, My name is <span>Thrinath Ravula,</span>
            </p>
            <p>
              A Web <span>designer</span> and <span>Developer</span>
            </p>
          </Bounce>
          <Bounce bottom delay={10}>
            <h4 className="about-sub-text">
              Specializing in refined digital web experiences with a focus on
              animated, responsive, and interactive content.
            </h4>
          </Bounce>
          <Bounce bottom delay={20}>
            <h4 className="about-sub-text">
              Delivering highly executed front-end user experiences by paying
              close attention to the nuances of design, optimization, and
              performance
            </h4>
          </Bounce>
          <Bounce bottom delay={30}>
            <div className="morebtn">
              <MoreButton btntext="Let’s make something special" />
            </div>
          </Bounce>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default About;

export const MoreButton = ({ btntext }) => {
  return (
    <Link className="cta" to="/contact">
      <span className="hover-underline-animation"> {btntext} </span>
      <svg
        id="arrow-horizontal"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="10"
        viewBox="0 0 46 16"
      >
        <path
          id="Path_10"
          data-name="Path 10"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
          fill="#cecece"
        ></path>
      </svg>
    </Link>
  );
};

// An interface designer and Developer based in Chennai. I’m
//           passionate about helping creative professionals to increase their
//           worth by improving their craft and process.

// <p>
// Hello! My name is Thrinath, An interface designer and Developer
// based in Chennai. I enjoy creating things that live on the internet.
// </p>
