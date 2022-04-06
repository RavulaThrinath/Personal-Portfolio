import React from "react";
import "./Work.css";
// import projectImage from "../../Assets/techlabit.png";
import { projectList } from "../../Data";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";

const Work = () => {
  return (
    <div>
    <Faketitle fakeTitle="Work" />
      <div className="projects-list">
        <Heading
          headingTitle={`My Works`}
          headingSubTitle={`A small sampling of what I've been \n up to over the last couple of years.`}
        />

        {projectList.map((project) => (
          <div className="project-container" key={project.id}>
            <div className="project-details">
              <h1>{project.projectName}</h1>
              <p>{project.projectDes}</p>
              <a
                class="site-link"
                href={project.siteURL}
                target="_blank"
                rel="noreferrer"
              >
                <span>Visit Site</span>
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
                    fill="#8b949e"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
