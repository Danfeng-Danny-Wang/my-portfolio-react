import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Danfeng "Danny" Wang</h1>
      <img src="./avatar.jpg" alt="My avatar" className={styles.avatar} />
    </header>
  );
}

export default Header;
