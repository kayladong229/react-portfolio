import React from "react";

const styles = {
  headerStyle: {
    background: "#CAF0F8",
    display: 'flex',
    justifyContent: 'space-between',
    height: '45px'
  },
  headingStyle: {
    fontSize: "30",
  },
  ulStyle: {
    alignItems: 'center',
  }
};

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Kayla Dong's Portfolio</h1>
        <ul style={styles.ulStyle} className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#about"
              //If not currently on About Me page, we click the About tab to switch pages to the About Me page
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
