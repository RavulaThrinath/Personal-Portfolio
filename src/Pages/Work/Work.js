import React from "react";
import "./Work.css";
// import projectImage from "../../Assets/techlabit.png";
import { projectList } from "../../Data";

const Work = () => {
  return (
    <div>
      <div className="fake-title-parent">
        <h1 className="fake-title">Work</h1>
      </div>
      <div className="projects-list">
        <div className="HContact-heading">
          <div className="HContact-title">My Works</div>
          <div className="HContact-subtitle">
            {`A small sampling of what I've been \n up to over the last couple of years`}
          </div>
        </div>
        {projectList.map((project) => (
          <div className="project-container" key={project.id}>
            <img src={project.imageId} alt="" />
            <div className="project-details">
              <h1>{project.projectName}</h1>
              <p>{project.projectDes}</p>
              <a className="site-link" href={project.siteURL} target="_blank" rel="noreferrer">
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
