import React from "react";
import "./Work.css";
// import projectImage from "../../Assets/techlabit.png";
import { projectList } from "../../Data";
import Bounce from "react-reveal/Bounce";

const Work = () => {
  return (
    <div>
      <div className="fake-title-parent">
        <h1 className="fake-title">Work</h1>
      </div>
      <div className="projects-list">
        <Bounce top delay={100}>
          <div className="HContact-heading">
            <div className="HContact-title">My Works</div>
            <div className="HContact-subtitle">
              {`A small sampling of what I've been \n up to over the last couple of years`}
            </div>
          </div>
        </Bounce>
        {projectList.map((project) => (
          <div className="project-container" key={project.id}>
            <Bounce top delay={100}>
              <img src={project.imageId} alt="" />
            </Bounce>
            <div className="project-details">
              <Bounce left delay={150}>
                <h1>{project.projectName}</h1>
              </Bounce>
              <Bounce left delay={200}>
                <p>{project.projectDes}</p>
              </Bounce>
              <Bounce left delay={250}>
                <a
                  className="site-link"
                  href={project.siteURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site
                </a>
              </Bounce>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
