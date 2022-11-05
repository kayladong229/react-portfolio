import React from "react";

const styles = {
  footerStyle: {
    background: "#CAF0F8",
  },
  headingStyle: {
    fontSize: "30px",
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