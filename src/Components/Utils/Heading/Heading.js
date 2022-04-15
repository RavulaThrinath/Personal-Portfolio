import React from "react";
import "./Heading.css";
import { motion } from "framer-motion";

const Heading = ({ headingTitle, headingSubTitle }) => {
  const container = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: "-100" },
  };
  return (
    <motion.div
      className="heading-container"
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ type: "tween" }}
      variants={container}
    >
      <div className="heading-title">{headingTitle}</div>
      <div className="heading-subtitle">{headingSubTitle}</div>
    </motion.div>
  );
};

export default Heading;
