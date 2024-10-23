import React from "react";
import "./Academics.css";
import awsIcon from "../../Assets/skill svgs/aws.svg";
import pythonIcon from "../../Assets/skill svgs/python.svg";
import reactIcon from "../../Assets/skill svgs/react.svg";
import flaskIcon from "../../Assets/skill svgs/flask.svg";
import sqlIcon from "../../Assets/skill svgs/sql.svg";
import csharpIcon from "../../Assets/skill svgs/c-sharp.svg";

const Academics = () => {
  return (
    <div className="academic-page">
      <div className="experience">
        <h1 className="academic-title">Experience</h1>
        <div class="timeline-main-container">
          <div class="timeline-first-container xyz">
            <h1>Computer Science Course Leader</h1>
            <h2>CSCE Department - UNL</h2>
            <time className="date">Jan 2023 - Present</time>
            <p>
              Promoted after demonstrating leadership and innovation in helping
              students grasp core computer science concepts. Managed, mentored,
              and coordinated a team of Learning Assistants, ensuring student
              engagement and curriculum success.
            </p>
          </div>
          <div class="timeline-second-container xyz">
            <h1>Undergraduate Reserarch Assistant</h1>
            <h2>College of Engineering - UNL</h2>
            <time className="date">Aug 2023 - Present</time>
            <p>
              Utilized advanced machine learning algorithms for the analysis of
              genetic sequences. Collaborated on creating a scalable web
              application using Python, Flask, and AWS for genomic data
              visualization. Leveraged Facebook ESM models and plotly for
              enhanced insights and data interpretation.
            </p>
          </div>
          <div class="timeline-third-container xyz">
            <h1>Internship</h1>
            <h2>Nebraskans for the Arts</h2>
            <time className="date">Jan 2024 - May 2024</time>
            <p>
              Employed strategic problem-solving to enhance the membership
              system using Little Green Light. Led the organization of
              high-impact advocacy events, focusing on collaboration and
              stakeholder engagement.
            </p>
          </div>
          <div class="timeline-fourth-container xyz">
            <h1>Bachelor's of Computer Science</h1>
            <h2>Univeristy of Nebraska-Lincoln</h2>
            <time className="date">Aug 2022 - Present</time>
            <p>
              Currently enrolled in a computer science degree. Involved in the
              learning and advancment of my career. Spend time learning new
              technologies and algorithms as well as completing personal and
              group projects.
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <h1 className="academic-title">Projects</h1>
        <div className="carousel-container"></div>
      </div>

      <div className="skills">
        <h1 className="academic-title">Skills</h1>
        <div className="skills-grid">
          <div className="skill1">
            <img src={pythonIcon} alt="python-icon" />
            <h3>Python</h3>
          </div>
          <div className="skill2">
            <img src={reactIcon} alt="react-icon" />
            <h3>React</h3>
          </div>
          <div className="skill3">
            <img src={csharpIcon} alt="csharp-icon" />
            <h3>C#</h3>
          </div>
          <div className="skill4">
            <img src={flaskIcon} alt="flask-icon" />
            <h3>Flask</h3>
          </div>
          <div className="skill5">
            <img src={awsIcon} alt="aws-icon" />
            <h3>AWS</h3>
          </div>
          <div className="skill6">
            <img src={sqlIcon} alt="sql-icon" />
            <h3>SQL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
