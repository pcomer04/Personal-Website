import React from "react";
import "./Home.css";
import { Navbutton } from "../../index";
import { ReactComponent as GithubIcon } from "../../Assets/icons/icons8-github.svg";
import { ReactComponent as LinkedinIcon } from "../../Assets/icons/icons8-linkedin.svg";
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
        {" "}
        <a href="#">Peyton Comer</a>
      </h1>
      <div className="links">
        <a href="">
          <GithubIcon />
        </a>
        <a href="">
          <LinkedinIcon />
        </a>
      </div>
    </div>
  );
};

export default Home;
