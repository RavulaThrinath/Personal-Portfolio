import React from "react";
import "./About.css";
import AboutImage from "../../Assets/AboutImage.svg";
import { Link } from "react-router-dom";
import Skill from "./Skills/Skill";
// import { motion } from "framer-motion";
// import { pageVariants, pageTransition, pageStyle } from "../../Data";

const About = () => {
  return (
    <div>
      <div className="fake-title-parent">
        <h1 className="fake-title">About</h1>
      </div>
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImage} alt="" />
        </div>
        <div className="About-main-text">
          <p>
            Hi, My name is <span>Thrinath Ravula,</span>
          </p>
          <p>
            A Web <span>designer</span> and <span>Developer</span>
          </p>
          <h4 className="about-sub-text">
            Specializing in refined digital web experiences with a focus on
            animated, responsive, and interactive content. Delivering highly
            executed front-end user experiences by paying close attention to the
            nuances of design, optimization, and performance.
          </h4>

          <div className="morebtn">
            <MoreButton btntext="Let’s make something special" />
          </div>
        </div>
      </div>
      <Skill />
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
