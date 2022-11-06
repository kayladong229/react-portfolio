import React from "react";
import Navigation from "./Navigation";

const styles = {
  headerStyle: {
    background: "#CAF0F8",
    display: 'flex',
    justifyContent: 'space-between',
    height: '42px',
  },
  headingStyle: {
    fontSize: "30",
    marginLeft: '10px'
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>Kayla Dong's Portfolio</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
    </div>
  );
}

export default Header;
