import React from "react";
import "./Home.css";
import { Navbutton } from "../../index";
import scoutsPic from "../../Assets/musician/finals-scouts-lot.jpg";
import studentPic from "../../Assets/student/big-n.JPG";

const Home = () => {
  return (
    <div className="split">
      <div className="dimmer student-side">
        <img src={studentPic} alt="nebraska logo" />
        <div className="navigation">
          <Navbutton path="/student" text="Student" />
        </div>
      </div>

      <div className="dimmer musician-side">
        <img src={scoutsPic} alt="scouts finals portrait" />
        <div className="navigation">
          <Navbutton path="/musician" text="Musician" />
        </div>
      </div>
      <h1 className="name-title">
        <a href="/contact">Peyton Comer</a>
      </h1>
    </div>
  );
};

export default Home;
