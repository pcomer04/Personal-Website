import React from "react";
import "./Musician.css";

const Musician = () => {
  return (
    <div className="musician-page">
      <div className="performance-experience">
        <h1 className="musician-title">Performance Experience</h1>
        <img className="performance-image" src="path/to/performance.jpg" alt="Performance1" />
        <img className="performance-image" src="path/to/performance.jpg" alt="Performance2" />
        <img className="performance-image" src="path/to/performance.jpg" alt="Performance3" />
        <img className="performance-image" src="path/to/performance.jpg" alt="Performance4" />

      </div>

      <div className="teaching">
        <h1 className="musician-title">Teaching Experience</h1>
      </div>
    </div>
  );
};

export default Musician;
