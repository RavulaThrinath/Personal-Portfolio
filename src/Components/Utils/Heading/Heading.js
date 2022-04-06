import React from "react";
import "./Heading.css"

const Heading = ({ headingTitle, headingSubTitle }) => {
  return (
    <div className="heading-container">
      <div className="heading-title">{headingTitle}</div>
      <div className="heading-subtitle">{headingSubTitle}</div>
    </div>
  );
};

export default Heading;
