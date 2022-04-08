import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaFigma,
  FaNode,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiSolidity } from "react-icons/si";
import Heading from "../../../Components/Utils/Heading/Heading";

const Skill = () => {
  return (
    <section className="skills">
      <Heading
        headingTitle={`My Skills`}
        headingSubTitle={`I like to craft beautiful and \n scalable Web products.`}
      />

      <div className="skill-icons">
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <FaCss3Alt />
          <p>CSS</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <IoLogoJavascript />
          <p>JavaScript</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <FaReact />
          <p>React Js</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <FaNode />
          <p>Node Js</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <SiSolidity />
          <p>Solidity</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <FaGithub />
          <p>Github</p>
        </div>
        <div
          className="skill-container"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <FaFigma />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
