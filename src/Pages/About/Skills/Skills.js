import React from "react";
import "./Skills.css";
// import { FaReact } from "react-icons/fa";
import { hServicesList } from "../../../Data";

const Skills = () => {
  return (
    <section className="Skills-container">
      <div className="HContact-heading">
        <div className="HContact-title">My Skills</div>
        <div className="HContact-subtitle">{`I like to craft beautiful and \n scalable Web products.`}</div>
      </div>
      <div className="hservices-list">
        {hServicesList.map((list) => (
          <div key={list.id} className="list-container">
            <div className="skill-icon">
              <img
                src={require(`../../../Assets/${list.Imageid}.png`)}
                alt=""
              />{" "}
            </div>
            <h1 className="list-title">{list.title}</h1>
            <p className="listText">{list.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
