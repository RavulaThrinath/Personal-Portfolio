import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Skill from "./Skills/Skill";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const About = () => {
  const container = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  const container2 = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vw" },
  };
  return (
    <>
      <Helmet>
        <title>About - Thrinath Ravula</title>
        <meta
      name="description"
      content="Thrinath Ravula is a front-end developer who spends time building useful products. He Specialize in refined web experiences with a focus on animated, responsive, & interactive content. He is a designer, developer and content creator."
    />
        <link rel="canonical" href="/about" />
      </Helmet>
      <Faketitle fakeTitle="About" />
      <section>
        <div className="about-container">
          <div className="About-main-text">
            <motion.h1
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              variants={container2}
            >
              i'm <span>Thrinath Ravula</span> And i'm a <br />
              <span> web developer</span> and <span>designer.</span>
            </motion.h1>
            <motion.h4
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.5, duration: 0.4 }}
              variants={container}
              className="about-sub-text"
            >
              I Specialize in refined web experiences with a focus on animated,
              responsive, & interactive content. Delivering highly executed
              front-end user experiences by paying close attention to the
              nuances of design, optimization, and performance.
            </motion.h4>
            <motion.h4
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.6, duration: 0.4 }}
              variants={container}
              className="about-sub-text"
            >
              I work to make a better web; one that is fast, easy to use,
              beautiful, accessible to all, and frustration-free. Regardless of
              your specific business requirements, in solving these challenges,
              you have a great chance of finding success online.
            </motion.h4>
            <div className="morebtn">
              <MoreButton btntext="Let’s make something special" />
            </div>
          </div>
        </div>
        <Skill />
      </section>
    </>
  );
};

export default About;

export const MoreButton = ({ btntext }) => {
  const container = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "spring", delay: 1 }}
      variants={container}
    >
      <Link className="cta" to="/contact">
        <span className="hover-underline-animation"> {btntext} </span>
        <svg
          id="arrow-horizontal"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
            fill="#7f78d2"
            
          ></path>
        </svg>
      </Link>
    </motion.div>
  );
};

// An interface designer and Developer based in Chennai. I’m
//           passionate about helping creative professionals to increase their
//           worth by improving their craft and process.

// <p>
// Hello! My name is Thrinath, An interface designer and Developer
// based in Chennai. I enjoy creating things that live on the internet.
// </p>
