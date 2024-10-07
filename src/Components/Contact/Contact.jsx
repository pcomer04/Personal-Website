import React from "react";
import "./Contact.css";
import headshot from "../../Assets/student/Headshot.jpg";
import { ReactComponent as GithubIcon } from "../../Assets/icons/icons8-github.svg";
import { ReactComponent as LinkedinIcon } from "../../Assets/icons/icons8-linkedin.svg";

const Contact = () => {
  return (
    <div className="background">
      <div className="contact-container">
        <div className="headshot">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="contact-info">
          <h1>Contact Information</h1>
          <p> Email: pcomer04@centurylink.net</p>
          <p> Phone: 531-205-0580</p>
          <div className="socials">
            <a href="https://github.com/pcomer04"><GithubIcon className="github"/></a>
            <a href="https://www.linkedin.com/in/peyton-comer-b3a7b7229/"> <LinkedinIcon className="linkedin"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
