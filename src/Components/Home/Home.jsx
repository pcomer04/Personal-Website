import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="dimmer">
      <div className="split student-side">
        <div className="centered">
          <img src="/Assets/student/big-n.jpg" alt="nebraska logo" />
        </div>
      </div>

      <div className="split musician-side">
        <div className="centered">
          <img src="/Assets/musician/finals-scouts-lot.jpg" alt="scouts finals portrait"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
