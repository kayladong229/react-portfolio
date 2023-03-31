import React from "react";

const styles = {
  body: {
    backgroundColor: "#90E0EF",
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  heading: {
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
  proficiencies: {
    marginLeft: "20px",
    display: "table",
    margin: "0 auto",
  },
};

export default function Resume() {
  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>My Resume</h1>
      <p style={styles.text}>
        Click{" "}
        <a
          href={require("../../assets/Kayla Dong Resume 2023.pdf")}
          download
        >
          here
        </a>{" "}
        to download the latest version of my resume.
      </p>
      <h2 style={styles.proficiencies}>
        <u>Proficiencies</u>
      </h2>
      <br />
      <h3 style={styles.proficiencies}>Front End:</h3>
      <ul style={styles.proficiencies}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bulma</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <br />
      <h3 style={styles.proficiencies}>Back End:</h3>
      <ul style={styles.proficiencies}>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL, NoSQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
