import React from "react";
import Project from "../Project";

const styles = {
  body: {
    backgroundColor: "#90E0EF",
    paddingTop: '100px',
    paddingBottom: '100px',
  },
  heading: {
    textAlign: "center",
  },
};

const projects = [
  {
    id: 1,
    name: "Timed Coding Quiz",
    image: require("../../assets/timed-quiz.png"),
    link: "https://kayladong229.github.io/timed-coding-quiz/",
    description:
      "A 30-second quiz that tests users on the basics of JavaScript.",
    skills: "HTML, CSS, JavaScript",
    githubRepo: "https://github.com/kayladong229/timed-coding-quiz",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    image: require("../../assets/Weather Dashboard demo.gif"),
    link: "https://kayladong229.github.io/weather-dashboard/",
    description:
      "A simple weather app that uses a third-party API (OpenWeather) to return the current weather along with a five-day forecast of a searched city.",
    skills: "HTML, CSS, JavaScript, Third-Party APIs",
    githubRepo: "https://github.com/kayladong229/weather-dashboard",
  },
  {
    id: 3,
    name: "Tech Blog",
    image: require("../../assets/tech-blog.png"),
    link: "https://young-earth-73455.herokuapp.com/",
    description:
      "A basic blog that was created using the MVC model and deployed to Heroku.",
    skills: "MVC/Handlebars, Express, MySQL, Sequelize, Heroku",
    githubRepo: "https://github.com/kayladong229/tech-blog",
  },
  {
    id: 4,
    name: "Text Editor",
    image: require("../../assets/text-editor.png"),
    link: "https://secret-gorge-40545.herokuapp.com/",
    description:
      "A simple Progressive Web Application (PWA) that can be downloaded as a separate application from the browser and used offline.",
    skills: "PWA, IndexedDB",
    githubRepo: "https://github.com/kayladong229/text-editor",
  },
  {
    id: 5,
    name: "Wiki-Tree (Group Project)",
    image: require("../../assets/wiki-tree.jpeg"),
    link: "https://hunterbrennan1.github.io/TODO-Team-Name-repo/",
    description:
      "A simplified search engine for trees. Created with three other developers.",
    skills: "HTML, JavaScript, Bulma, Wikipedia API, Pexels API",
    githubRepo: "https://github.com/HunterBrennan1/TODO-Team-Name-repo",
  },
  {
    id: 6,
    name: "Primary Keys Rentals (Group Project)",
    image: require("../../assets/primary-keys-rentals.png"),
    link: "https://primary-keys-rentals.herokuapp.com/",
    description:
      "A rental car website with user accounts. Created with three other developers.",
    skills: "HTML, Bootstrap, Express, Node, MySQL, Sequelize, MVC/Handlebars",
    githubRepo: "https://github.com/TottoMoe/PrimaryKeysRentals",
  },
  {
    id: 7,
    name: "Purrfect Pet (Group Project)",
    image: require("../../assets/purrfect-pet.png"),
    link: "https://purrfect-pet-app.herokuapp.com/",
    description:
      "An app that matches the right pet with the right owner. Created with four other developers.",
    skills: "GraphQL, Apollo, React, MongoDB/Mongoose ODM, Heroku, JWT, PWA",
    githubRepo: "https://github.com/kayladong229/purrfect-pet",
  },
  {
    id: 8,
    name: "HTML Email Template",
    image: require("../../assets/Screen Shot 2023-07-23 at 3.09.47 PM.png"),
    link: "https://kayladong229.github.io/san-francisco-html-email/",
    description:
      "A sample email template built entirely using HTML.",
    skills: "HTML",
    githubRepo: "https://github.com/kayladong229/san-francisco-html-email",
  },
];

export default function Portfolio() {
  return (
    <div style={styles.body}>
      <h1 style={styles.heading}>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}
