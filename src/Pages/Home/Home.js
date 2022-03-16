import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
    
      <div className="hometext">
        <h1 className="main-title">
          Hi There, <br /> I’m Thrinath, <br /> Web developer
        </h1>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
