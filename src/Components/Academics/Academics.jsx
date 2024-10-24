import React from "react";
import "./Academics.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import awsIcon from "../../Assets/skill svgs/aws.svg";
import pythonIcon from "../../Assets/skill svgs/python.svg";
import reactIcon from "../../Assets/skill svgs/react.svg";
import flaskIcon from "../../Assets/skill svgs/flask.svg";
import sqlIcon from "../../Assets/skill svgs/sql.svg";
import csharpIcon from "../../Assets/skill svgs/c-sharp.svg";
import nasasuitsPhoto from "../../Assets/student/nasa-suits.png";
import doppelhangerPhoto from "../../Assets/student/doppelhanger.png";
import portfolioPhoto from "../../Assets/student/portfolio.png";
import softwareEngineeringPhoto from "../../Assets/student/grocery.png";

const Academics = () => {
  return (
    <div className="academic-page">
      <div className="experience">
        <h1 className="academic-title">Experience</h1>
        <div className="timeline-main-container">
          <div className="timeline-first-container xyz">
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
          <div className="timeline-second-container xyz">
            <h1>Undergraduate Research Assistant</h1>
            <h2>College of Engineering - UNL</h2>
            <time className="date">Aug 2023 - Present</time>
            <p>
              Utilized advanced machine learning algorithms for the analysis of
              genetic sequences. Collaborated on creating a scalable web
              application using Python, Flask, and AWS for genomic data
              visualization. Leveraged Facebook ESM models and Plotly for
              enhanced insights and data interpretation.
            </p>
          </div>
          <div className="timeline-third-container xyz">
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
          <div className="timeline-fourth-container xyz">
            <h1>Bachelor's of Computer Science</h1>
            <h2>University of Nebraska-Lincoln</h2>
            <time className="date">Aug 2022 - Present</time>
            <p>
              Currently enrolled in a computer science degree. Involved in the
              learning and advancement of my career. Spend time learning new
              technologies and algorithms as well as completing personal and
              group projects. A part of the Honors Program and Accelerated
              Masters progam.
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <h1 className="academic-title">Projects</h1>
        <div className="carousel-container">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            onMouseEnter={(e) => e.stopPropagation()}
            onMouseLeave={(e) => e.stopPropagation()}
            infiniteLoop={true}
            showStatus={false}
          >
            <div className="carousel-slide">
              <img
                className="carousel-img"
                src={nasasuitsPhoto}
                alt="nasa-suits-photo"
              />
              <div id="legend">
                <p>
                  <a
                    href="https://github.com/MattBigge/UNLSUITS2022-23_MORTI"
                    target="_blank"
                    rel="noreferrer"
                  >
                    As a part of the annual NASA Suits challenge, I contributed
                    to the development of a cutting-edge augmented reality
                    interface using C#, Unity, and NASA APIs on the HoloLens 2.
                    Focused on real-time data processing for astronaut
                    efficiency and environmental responsiveness in high-stakes
                    conditions.
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img
                className="carousel-img"
                src={doppelhangerPhoto}
                alt="doppelhanger-photo"
              />
              <div id="legend">
                <p>
                  <a
                    href="https://github.com/pcomer04/HackMidwest-DoppelHanger"
                    target="_blank"
                    rel="noreferrer"
                  >
                    As a part of the annual Hack Midwest Hackathon, I
                    contributed to the creation of a machine learning-driven
                    outfit recommendation engine, using Torch, Pinata, and SQL.
                    Developed a full-stack solution with a React frontend and
                    Python/Django backend, demonstrating cross-functional
                    collaboration and innovative AI integration.
                  </a>
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img
                className="carousel-img"
                src={portfolioPhoto}
                alt="portfolio-photo"
              />
              <div id="legend">
                <p>
                  As a personal project I took on the endeavor of designing a
                  portfolio website. Focused on learning good programming
                  practices with React and honing CSS skills. Another goal was
                  to learn how to host a website and I accomplished that with
                  GitHub.
                </p>
              </div>
            </div>
            <div className="carousel-slide">
              <img
                className="carousel-img"
                src={softwareEngineeringPhoto}
                alt="software-engineering-project-photo"
              />
              <div id="legend">
                <p>
                  As a capstone project in my Software Engineering class my 2nd
                  year of classes, my group build a Full-Stack Grocery Store
                  webapp. This app used C# .NET for the backend, an SQL database
                  for user management and information storage, and React/CSS
                  frontend. I contributed a lot to the frontend development but
                  also was involved in API creation and testing with Unit Tests
                  inside of Visual Studio.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
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
