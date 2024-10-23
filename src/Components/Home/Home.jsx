import React from "react";
import "./Home.css";
import scoutsPic from "../../Assets/musician/musician.jpg";
import studentPic from "../../Assets/student/academic.jpg";

const Home = () => {
  return (
    <div className="home-page">
      <div className="split">
        <div className="dimmer student-side">
          <img src={studentPic} alt="nebraska logo" />
          <div className="picture-labels">
              <a href="/academic"><h1>Academic</h1></a>
          </div>
          <div className="navigation">
          </div>
        </div>

        <div className="dimmer musician-side">
          <img src={scoutsPic} alt="scouts finals portrait" />
          <div className="picture-labels">
              <a href="/musician"><h1>Musician</h1></a>
          </div>
          <div className="navigation">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
