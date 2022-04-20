import React from "react";
import "./Heading.css";
import { motion } from "framer-motion";

const Heading = ({ headingTitle, headingSubTitle }) => {
  const container = {
    initial: { opacity: 0, y: -70 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="heading-container"
      initial="initial"
      animate="animate"
      transition={{ type: "tween" }}
      variants={container}
    >
      <div className="heading-title">{headingTitle}</div>
      <div className="heading-subtitle">{headingSubTitle}</div>
    </motion.div>
  );
};

export default Heading;
