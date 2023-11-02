import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>dannywang@utexas.edu</p>
      <ul className={styles.links}>
        <li>
          <a
            href="https://www.linkedin.com/in/danfeng-wang-7352ba152/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Danfeng-Danny-Wang"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
