import React, { useState } from "react";
import "./Work.css";
import { projectList } from "../../Data";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";

const Work = () => {
  const container = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
  const container1 = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };

  const [items, setItems] = useState(projectList);

  const filterProject = (cateproject) => {
    const updatedProjects = projectList.filter((currentProjects) => {
      return currentProjects.category === cateproject;
    });
    setItems(updatedProjects);
  };
  return (
    <>
      <Faketitle fakeTitle="Work" />
      <div>
        <div className="work-list">
          <Heading
            headingTitle={`My Works`}
            headingSubTitle={`A small sampling of what I've been \n up to over the last couple of years.`}
          />
          <div className="cat-btn-container">
            <motion.button
              variants={container1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ delay: 0.8, easeOut: [0, 0.25, 0.5, 1] }}
              className="cat-btn"
              onClick={() => setItems(projectList)}
            >
              <span>All</span>
            </motion.button>
            <motion.button
              variants={container1}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.9 }}
              className="cat-btn"
              onClick={() => filterProject("js")}
            >
              <span> Js</span>
            </motion.button>
            <motion.button
              variants={container1}
              initial="initial"
              animate="animate"
              transition={{ delay: 1 }}
              className="cat-btn"
              onClick={() => filterProject("css")}
            >
              <span>Css</span>
            </motion.button>
          </div>
          <div className="projects-list">
            {items.map((project) => (
              <motion.div
                className="project-container"
                key={project.id}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={container}
                transition={{
                  type: "tween",
                  stiffness: 100,
                  delay: `${project.delay}`,
                }}
              >
                <h1>{project.projectName}</h1>
                <p>{project.projectDes}</p>
                <a
                  className="site-link"
                  href={project.siteURL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{project.urlTitle}</span>
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
