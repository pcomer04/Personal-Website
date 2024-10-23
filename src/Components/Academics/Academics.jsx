import React from "react";
import "./Academics.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import doppelHanger from "../../Assets/student/doppelhanger.png";
// import nasaSuits from "../../Assets/student/nasa-suits.png";

const Academics = () => {
  return (
    <div className="academic-page">
      <div className="experience">
        <h1 className="academic-title">Experience</h1>
      </div>

      <div className="projects">
        <h1 className="academic-title">Projects</h1>
      </div>

      <div className="skills">
        <h1 className="academic-title">Skills</h1>
        <div class="skills-grid">
          <div class="skill1">
            <h3>HTML</h3>
          </div>
          <div class="skill2">
            <h3>CSS</h3>
          </div>
          <div class="skill3">
            <h3>JavaScript</h3>
          </div>
          <div class="skill4">
            <h3>React</h3>
          </div>
          <div class="skill5">
            <h3>Python</h3>
          </div>
          <div class="skill6">
            <h3>Fortnite</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
