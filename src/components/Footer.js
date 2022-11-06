import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const styles = {
  footerStyle: {
    background: "#CAF0F8",
  },
  headingStyle: {
    fontSize: "30px",
    textAlign: "center",
  },
  icons: {
    display:'flex',
    justifyContent: 'space-evenly',
  }
};

function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.headingStyle}>Check out my other sites:</h1>
      <div className="icon-container" style={styles.icons}>
        <a href="https://github.com/kayladong229">
          <FaGithub size={42} />
        </a>
        <a href="https://www.linkedin.com/in/kayla-d-1a64a5b8/">
          <FaLinkedin size={42} />
        </a>
        <a href="https://stackoverflow.com/users/19170067/kd922">
          <FaStackOverflow size={42} />
        </a>
      </div>
    </header>
  );
}

export default Footer;
