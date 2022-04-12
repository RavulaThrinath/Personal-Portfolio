import React from "react";
import "./Work.css";
import { projectList } from "../../Data";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";

const Work = () => {

  return (
    <>
      <Faketitle fakeTitle="Work" />
      <div>
        <div className="work-list">
          <Heading
            headingTitle={`My Works`}
            headingSubTitle={`A small sampling of what I've been \n up to over the last couple of years.`}
          />

          <div className="projects-list">
            {projectList.map((project) => (
              <motion.div
                className="project-container"
                key={project.id}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <h1>{project.projectName}</h1>
                <p>{project.projectDes}</p>
                <a
                  className="site-link"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
