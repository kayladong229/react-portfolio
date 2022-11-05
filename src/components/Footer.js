import React from "react";

const styles = {
  footerStyle: {
    background: "#0077B6",
  },
  headingStyle: {
    fontSize: "100px",
  },
};

function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.headingStyle}>Check out my other sites:</h1>
    </header>
  );
}

export default Footer;