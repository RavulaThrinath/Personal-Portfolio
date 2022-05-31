import React, { useState } from "react";
import "./Work.css";
import { projectList } from "../../Data";
import Heading from "../../Components/Utils/Heading/Heading";
import Faketitle from "../../Components/Utils/Faketitle/Faketitle";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
  const [toggleState, setToggleState] = useState(1);

  const filterProject = (cateproject, index) => {
    const updatedProjects = projectList.filter((currentProjects) => {
      return currentProjects.category === cateproject;
    });
    setItems(updatedProjects);
    setToggleState(index);
    console.log(index);
  };
  return (
    <>
      <Helmet>
        <title>Work - Thrinath Ravula</title>
        <meta
          name="description"
          content="Thrinath Ravula is a front-end developer who spends time building useful products. He Specialize in refined web experiences with a focus on animated, responsive, & interactive content. He is a designer, developer and content creator."
        />
        <link rel="canonical" href="/works" />
      </Helmet>
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
              transition={{
                duration: 0.1,
                delay: 0.8,
                easeOut: [0, 0.25, 0.5, 1],
              }}
              className={
                toggleState === 1 ? "cat-btn cat-btn-active" : "cat-btn"
              }
              onClick={() => setItems(projectList, 1)}
            >
              <span>All</span>
            </motion.button>
            <motion.button
              variants={container1}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.1,
                delay: 1,
                easeOut: [0, 0.25, 0.5, 1],
              }}
              className={
                toggleState === 2 ? "cat-btn cat-btn-active" : "cat-btn"
              }
              onClick={() => filterProject("js", 2)}
            >
              <span> Js</span>
            </motion.button>
            <motion.button
              variants={container1}
              initial="initial"
              animate="animate"
              transition={{
                duration: 0.1,
                delay: 1.2,
                easeOut: [0, 0.25, 0.5, 1],
              }}
              className={
                toggleState === 3 ? "cat-btn cat-btn-active" : "cat-btn"
              }
              onClick={() => filterProject("css", 3)}
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
                <div className="source-links">
                  <a
                    className="site-link"
                    href={project.siteURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.icon1}
                  </a>
                  <a
                    className="site-link"
                    href={project.gitURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.icon2}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
