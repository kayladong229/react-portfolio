import React from "react";

const styles = {
  heading: {
    textAlign: "center",
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  text: {
    textAlign: "center",
  },
};

export default function About() {
  return (
    <div className="about">
      <h1 style={styles.heading}>About Me</h1>
      <img
        src="../../assets/pfp.jpg"
        alt="profile pic"
        style={styles.image}
      />
      <p style={styles.text}>
        I am an aspiring full stack web designer and developer who is currently
        working on acquiring a certificate in full stack web development from
        the UC Berkeley Coding Bootcamp. In this bootcamp, I learned how to
        utilize languages such as JavaScript, MySQL, and React.js to create a
        polished and intuitive user experience on the Internet. I'm also comfortable with both working alone and working as part of a team to create and finish new projects.
      </p>
      <p style={styles.text}>
        When I'm not coding or taking care of other responsibilities, I'm
        either playing a video game, listening to music, or looking up new
        restaurants to try in my area.
      </p>
    </div>
  );
}
