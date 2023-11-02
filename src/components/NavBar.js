import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/aboutme">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
