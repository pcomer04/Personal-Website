import React from "react";
import "./Contact.css";
import headshot from "../../Assets/student/Headshot.jpg";
import linkedinIcon from "../../Assets/icons/linkedin.svg";
import githubIcon from "../../Assets/icons/github.svg";
import resume from "../../Assets/student/Resume-Download.pdf";
import { FaPhone } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="background">
      <div className="contact-container">
        <div className="headshot">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="contact-info">
          <h1>Contact Information</h1>
          <div className="information">
            <p className="email">
              {" "}
              <MdOutlineEmail className="icon" /> pcomer04@centurylink.net
            </p>
            <p className="phone">
              {" "}
              <FaPhone className="icon" /> 531-205-0580
            </p>
            <p className="resume">
              <a href={resume} download={"Peyton_Comer_Resume.pdf"}>
                <IoMdDownload className="icon" />
              </a>
              Resume
            </p>
          </div>
          <div className="socials">
            <a href="https://github.com/pcomer04">
              <img src={githubIcon} alt="github-icon" className="github" />
            </a>
            <a href="https://www.linkedin.com/in/peyton-comer-b3a7b7229/">
              <img
                src={linkedinIcon}
                alt="linkedIn-icon"
                className="linkedin"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
