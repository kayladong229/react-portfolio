import React from "react";

const styles = {
  card: {
    width: "100%",
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  }
};

function Project(props) {
  return (
    <div className="container row row-cols-1 row-cols-md-3 mx-auto" style={styles.flex}>
        {props.projects.map((project) => (
          <div className="container col mb-4">
            <div className="row row-cols-1 m-3">
              <div
                className="card col-sm-3"
                style={styles.card}
                key={project.id}
              >
                <img
                  className="card-img-top"
                  src={project.image}
                  alt="project preview"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={project.link}>{project.name}</a>
                  </h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.githubRepo}>Github Repo</a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Project;
