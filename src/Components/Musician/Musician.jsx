import React from "react";
import "./Musician.css";
import scoutsBG from "../../Assets/musician/madison-bg.png";
import crossroadsBG from "../../Assets/musician/crossroads-bg.png";
import academyBG from "../../Assets/musician/academy-bg.png";
import cornhuskerBG from "../../Assets/musician/unl-bg.png";

const Musician = () => {
  return (
    <div className="musician-page">
      <div id="performance-experience" className="performance-experience">
        <h1 className="musician-title">Performance Experience</h1>
        <div className="performance-image">
          <img src={scoutsBG} alt="Madison-Scouts-Image" />
          <p>Drum and Bugle Corps</p>
          <h1>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=YkQ3iR_y4Sg"
              rel="noreferrer"
            >
              Madison Scouts
            </a>
          </h1>
          <h2>April 2024 - Aug 2024</h2>
        </div>
        <div className="performance-image">
          <img src={crossroadsBG} alt="Crossroads-Percussion-Image" />
          <p>WGI - Indoor Percussion</p>
          <h1>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=4R1xm1Bbwr8"
              rel="noreferrer"
            >
              Crossroads Indoor
            </a>
          </h1>
          <h2>Dec 2023 - April 2024</h2>
        </div>

        <div className="performance-image">
          <img src={academyBG} alt="Academy-Image" />
          <p>Drum and Bugle Corps</p>
          <h1>
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=o0Kpvp-qMi0"
              rel="noreferrer"
            >
              The Academy
            </a>
          </h1>
          <h2>April 2022 - Aug 2023 </h2>
        </div>

        <div className="performance-image">
          <img src={cornhuskerBG} alt="Sheldon-Lot-Image" />
          <p>College Marching Band</p>
          <h1 id="cmb-h1">
            <a
              target="_blank"
              href="https://www.youtube.com/watch?v=9_rOAC--WkY"
              rel="noreferrer"
            >
              Cornhusker Marching Band
            </a>
          </h1>
          <h2>Aug 2022 - Present</h2>
        </div>
      </div>

      <div id="teaching" className="teaching">
        <h1 className="musician-title">Teaching Experience</h1>
        <div class="teaching-container">
          <div class="lcs">
            <h2>May 2024 - Present</h2>
            <h1>Precussion Instrcutor</h1>
            <h3>Lincoln Chrsitian School</h3>
          </div>
          <div class="waverly">
            <h2>Aug 2024 - Present</h2>
            <h1>Bass Drum Instructor</h1>
            <h3>Waverly High School</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musician;
