import styles from "./styles.module.css";
interface NavBarProps {}

export default function NavBar(props: NavBarProps) {
  return (
    <nav className={styles.container}>
      <img className={styles.logo} src="/imgs/xakari_logo.png"></img>
      <img className={styles.icon} src="/imgs/xakari_icon.png"></img>
    </nav>
  );
}
