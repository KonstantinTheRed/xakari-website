import styles from "./styles.module.css";
interface NavBarProps {}

export default function Join(props: NavBarProps) {
  return (
    <nav className={styles.container}>
      <img className={styles.logo} src="/imgs/xakari_logo.png"></img>
    </nav>
  );
}
