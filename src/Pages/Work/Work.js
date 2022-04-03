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
        <div
          className="HContact-heading"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="300"
          data-aos-duration="300"
        >
          <div className="HContact-title">My Works</div>
          <div className="HContact-subtitle">
            {`A small sampling of what I've been \n up to over the last couple of years`}
          </div>
        </div>
        {projectList.map((project) => (
          <div className="project-container" key={project.id}>
            <img
              src={project.imageId}
              alt=""
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="400"
              data-aos-duration="400"
            />
            <div
              className="project-details"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h1>{project.projectName}</h1>
              <p>{project.projectDes}</p>
              <a
                className="site-link"
                href={project.siteURL}
                target="_blank"
                rel="noreferrer"
              >
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
