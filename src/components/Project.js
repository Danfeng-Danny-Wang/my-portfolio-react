import styles from "./Project.module.css";

function Project({ project }) {
  return (
    <div className={styles.project}>
      <div>
        <h3>{project.projectName}</h3>
        <p>{project.techUsed}</p>
        <p>
          <a href={project.deployLink} target="_blank" rel="noreferrer">
            Depoly Link
          </a>
        </p>
        <p>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
        </p>
      </div>
      <a href={project.deployLink} target="_blank" rel="noreferrer">
        <img
          src={project.imgSrc}
          alt={project.imgAlt}
          className={styles.projectImage}
        />
      </a>
    </div>
  );
}

export default Project;
