import styles from "./AboutMe.module.css";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function AboutMe() {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <section className={styles.aboutMe}>
          <h1>About Me</h1>
          <div className={styles.textBody}>
            <p>
              Hi! My name is Danny. I'm a full-stack web developer with a
              background in chemical engineering and technical sales experience
              in the biotech industry. I was trained at the University of Texas
              at Austin coding boot camp and earned a certificate in full-stack
              web development. I obtained my bachelor's degree in chemical
              engineering from the University of Texas at Austin with an
              Elements of Computing Certificate.
            </p>
            <p>
              I love coding! And I have built a couple of cool projects. I love
              problem-solving and seeing an application from small to big. I am
              a quick learner and always want to learn and use the newest
              technologies.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutMe;
