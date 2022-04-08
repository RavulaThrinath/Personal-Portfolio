import React from "react";
import "./Heading.css";

const Heading = ({ headingTitle, headingSubTitle }) => {
  return (
    <div
      className="heading-container"
      data-aos="fade-right"
      data-aos-anchor="#example-anchor"
      data-aos-offset="100"
    >
      <div className="heading-title">{headingTitle}</div>
      <div className="heading-subtitle">{headingSubTitle}</div>
    </div>
  );
};

export default Heading;
