import React from "react";
import "./aboutskill.css";
import FourPoint from "../skillContainer/SkillContainer";
import SkillCircle from "../SkillCircles/SkillCircle";
const AboutSiklls = ({ aboutRef }) => {
  return (
    <div className="about-skill" ref={aboutRef}>
      <div className="about-skill-text">
        <h2>about me & my skills</h2>
      </div>
      <FourPoint />
      <div className="about-skill-images">
        <SkillCircle />
      </div>
    </div>
  );
};

export default AboutSiklls;
