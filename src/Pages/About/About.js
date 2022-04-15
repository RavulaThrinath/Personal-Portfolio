import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Skill from "./Skills/Skill";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <Faketitle fakeTitle="About" />
      <motion.section
      // initial={{ opacity: 0, x: 100 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: -100 }}
      >
        <div className="about-container">
          <div className="About-main-text">
            <h1>
              i'm <span>Thrinath Ravula</span> And i'm a <br />
              <span> web developer</span> and <span>designer.</span>
            </h1>
            {/* <h1>Thrinath Ravula</h1> */}
            <h4 className="about-sub-text">
              I Specialize in refined web experiences with a focus on animated,
              responsive, and interactive content. Delivering highly executed
              front-end user experiences by paying close attention to the
              nuances of design, optimization, and performance. Always in the
              lookout for exiting projects to work on.
            </h4>
            <div className="morebtn">
              <MoreButton btntext="Let’s make something special" />
            </div>
          </div>
        </div>
        <Skill />
      </motion.section>
    </>
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
          fill="#8b949e"
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
