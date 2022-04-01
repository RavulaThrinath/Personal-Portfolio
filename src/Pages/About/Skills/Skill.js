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

const Skill = () => {
  return (
    <section className="skills">
      <div className="HContact-heading">
        <div className="HContact-title">My Skills</div>
        <div className="HContact-subtitle">{`I like to craft beautiful and \n scalable Web products.`}</div>
      </div>
      <div className="skill-icons">
        <div className="skill-container">
          <FaHtml5 />
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <FaCss3Alt />
          <p>CSS</p>
        </div>
        <div className="skill-container">
          <IoLogoJavascript />
          <p>JavaScript</p>
        </div>
        <div className="skill-container">
          <FaReact />
          <p>React Js</p>
        </div>
        <div className="skill-container">
          <FaNode />
          <p>Node Js</p>
        </div>
        <div className="skill-container">
          <SiSolidity />
          <p>Solidity</p>
        </div>
        <div className="skill-container">
          <FaGithub />
          <p>Github</p>
        </div>
        <div className="skill-container">
          <FaFigma />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
