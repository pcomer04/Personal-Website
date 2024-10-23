import React from "react";
import "./Musician.css";

const Musician = () => {
  return (
    <div className="musician-page">
      <div id="performance-experience" className="performance-experience">
        <h1 className="musician-title">Performance Experience</h1>
        <img
          className="performance-image"
          src="path/to/performance.jpg"
          alt="Performance1"
        />
        <img
          className="performance-image"
          src="path/to/performance.jpg"
          alt="Performance2"
        />
        <img
          className="performance-image"
          src="path/to/performance.jpg"
          alt="Performance3"
        />
        <img
          className="performance-image"
          src="path/to/performance.jpg"
          alt="Performance4"
        />
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
