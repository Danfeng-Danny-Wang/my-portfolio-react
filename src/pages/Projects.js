import styles from "./Projects.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Project from "../components/Project";
import Footer from "../components/Footer";

const myProjects = [
  {
    projectName: "Who's On First?",
    techUsed: "HTML, CSS, Tailwind, Javascript",
    deployLink: "https://acomuzzie.github.io/whos-on-first/",
    githubLink: "https://github.com/AComuzzie/whos-on-first",
    imgSrc: "/Whos-On-First.png",
    imgAlt: "whos-on-first webpage screenshot",
  },
  {
    projectName: "Collectibles",
    techUsed: "Node.js, Express.js, RESTful API, MySQL",
    deployLink: "https://project-collections-cfb3d3b9c8f8.herokuapp.com/",
    githubLink: "https://github.com/Kumoko8/Collectibles-Full-Stack-App",
    imgSrc: "/Collectibles.png",
    imgAlt: "Collectibles webpage screenshot",
  },
  {
    projectName: "Workaholics",
    techUsed: "MERN stack, graphQL",
    deployLink: "https://workaholics-chat123-7583c92cc0c9.herokuapp.com/",
    githubLink: "https://github.com/Danfeng-Danny-Wang/workaholics",
    imgSrc: "/Work-A-Holics.png",
    imgAlt: "workaholics webpage screenshot",
  },
];

function Projects() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <section className={styles.projects}>
          <h1>My Projects</h1>
          <div className={styles.projectsBody}>
            <Project project={myProjects[0]} />
            <Project project={myProjects[1]} />{" "}
            <Project project={myProjects[2]} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
