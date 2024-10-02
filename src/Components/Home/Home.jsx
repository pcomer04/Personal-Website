import React from "react";
import "./Home.css";
import {Navbutton} from "../../index";

const Home = () => {
  return (
    <div className="split">
      <div className="dimmer student-side">
        <div className="centered">
          <img src="/Assets/student/big-n.jpg" alt="nebraska logo" />
          <Navbutton path="/student" text="Student" />
        </div>
      </div>

      <div className="dimmer musician-side">
        <div className="centered">
          <img src="/Assets/musician/finals-scouts-lot.jpg" alt="scouts finals portrait"/>
          <Navbutton path="/musician" text="Musician" />
        </div>
      </div>
    </div>
  );
};

export default Home;
