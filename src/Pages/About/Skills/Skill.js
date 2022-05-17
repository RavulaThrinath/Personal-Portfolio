import React from "react";
import "./Skills.css";

import Heading from "../../../Components/Utils/Heading/Heading";
import Tilt from "react-parallax-tilt";
import { iconTags } from "../../../Data";

const Skill = () => {
  return (
    <section className="skills">
      <Heading
        headingTitle={`My Skills`}
        headingSubTitle={`I like to craft beautiful and \n scalable Web products.`}
      />

      <div className="skill-icons">
        {iconTags.map((icons) => (
          <Tilt key={icons.id} className="skill-container" tiltReverse={true}>
            {icons.icon}
            <p>{icons.tagName}</p>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skill;
