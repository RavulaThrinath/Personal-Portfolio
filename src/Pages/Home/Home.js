import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import resume from "../../Assets/Thrinath Ravula (1).pdf";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Thrinath Ravula</title>
        <meta name="description" content="I am thrinath ravula" />
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
            </Link>
            <a href={resume} download className="button-28">
              Download CV
            </a>
          </div>
        </div>

        {/*  <About />
  <Contact />*/}
      </motion.section>
    </>
  );
};

export default Home;
