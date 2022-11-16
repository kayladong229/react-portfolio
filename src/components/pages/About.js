import React from "react";

const styles = {
  body: {
    backgroundColor: "#90E0EF",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  heading: {
    textAlign: "center",
  },
  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "250px",
    width: "250px",
  },
  text: {
    textAlign: "center",
  },
};

export default function About() {
  return (
    <div className="about" style={styles.body}>
      <h1 style={styles.heading}>About Me</h1>
      <img
        src={require("../../assets/pfp.jpg")}
        alt="profile pic"
        style={styles.image}
      />
      <p style={styles.text}>
        I am a web developer who earned a certificate in full stack web
        development from the UC Berkeley Coding Bootcamp. In this bootcamp, I
        learned how to utilize languages such as JavaScript, MySQL, and React.js
        to create a polished and intuitive user experience on the Internet. I'm
        also comfortable with both working alone and working as part of a team
        to create new projects and am capable of applying problem-solving skills
        and attention to detail to develop and finish them.
      </p>
      <p style={styles.text}>
        When I'm not coding or taking care of other responsibilities, I'm either
        playing a video game, listening to music, or looking up new restaurants
        to try in my area.
      </p>
      <p style={styles.text}>
        If you are interested in working with me, you can email me at kayladong.dev[at]gmail.com.
      </p>
    </div>
  );
}
