import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
// import resume from "../../Assets/Thrinath Ravula (1).pdf";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Thrinath Ravula - Web developer, designer, Content creator
        </title>
        <meta
          name="description"
          content="Thrinath Ravula is a front-end developer who spends time building useful products. He Specialize in refined web experiences with a focus on animated, responsive, & interactive content. He is a designer, developer and content creator."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <motion.section>
        <div className="hometext">
          <div className="intro">Hi there, I'm</div>
          <div className="main-title ">3 Nath</div>

          <div className="subtext">
            <p className="subtext-1">Brings ideas to life with code</p>
            <p className="subtext-2">
              Web developer. UI/UX Designer. Content Creator.
            </p>
          </div>
          <div className="btn-links">
            <Link to="/contact" className="button-27">
              Contact Me
              <svg
                id="arrow-horizontal"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="10"
                viewBox="0 0 46 16"
                style={{marginLeft: "10px"}}
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
            {/* <a href={resume} download className="button-28">
              Download CV
            </a> */}
          </div>
        </div>

        {/*  <About />
  <Contact />*/}
      </motion.section>
    </>
  );
};

export default Home;
