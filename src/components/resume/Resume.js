import React from "react";
import "./Resume.css";
import Image from "../../assets/website-resume-1.jpg";

function Resume(props) {
  return (
    <div id="Resume">
      <img src={Image} alt="Resume" />
      <br />
    </div>
  );
}

export default Resume;
