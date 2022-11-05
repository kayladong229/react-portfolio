import React from "react";

const styles = {
  headerStyle: {
    background: "#0077B6",
  },
  headingStyle: {
    fontSize: "100px",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Kayla Dong's Portfolio</h1>
    </header>
  );
}

export default Header;
