import React from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  let navbarClass = "navbar";
  let navbarContent;

  if (currentPath === "/") {
    navbarClass += " navbar-home";

    navbarContent = (
      <>
        <h1 className="name-title">
          <a href="/">Peyton Comer</a>
        </h1>
        <h2 className="contact-title">
          <a href="/contact">Contact</a>
        </h2>
      </>
    );
  } else if (currentPath === "/contact") {
    navbarClass += " navbar-contact";

    navbarContent = (
      <>
        <h1 className="name-title">
          <a href="/">Peyton Comer</a>
        </h1>
      </>
    );
  } else if (currentPath === "/academic") {
    navbarClass += " navbar-academic";

    navbarContent = (
      <>
        <h1 className="name-title">
          <a href="/">Peyton Comer</a>
        </h1>

        {/* need to add in-page routing/jumping */}
        <div className="academic-text">
          <h2 className="academic-info">Experience</h2>
          <h2 className="academic-info">Projects</h2>
          <h2 className="academic-info">Skills</h2>
        </div>
        <h2 className="contact-title">
          <a href="/contact">Contact</a>
        </h2>
      </>
    );
  } else if (currentPath === "/musician") {
    navbarClass += " navbar-musician";

    navbarContent = (
      <>
        <h1 className="name-title">
          <a href="/">Peyton Comer</a>
        </h1>

        {/* need to add in-page routing/jumping */}
        <div className="musician-text">
          <h2 className="musician-info">Performances</h2>
          <h2 className="musician-info">Teaching</h2>
          <h2 className="musician-info">Awards</h2>
        </div>

        <h2 className="contact-title">
          <a href="/contact">Contact</a>
        </h2>
      </>
    );
  }

  /* possible else statement for the rest of the webpages we may have */

  return <div className={navbarClass}>{navbarContent}</div>;
};

export default Navbar;
