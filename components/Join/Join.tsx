import styles from "./styles.module.css";
interface JoinProps {}

export default function Join(props: JoinProps) {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.icon} src="/imgs/xakari_icon.png"></img>
        <h2 className={styles.title}>Join the Fitness Revolution</h2>
        <p className={styles.desc}>
          Start your fitness journey with a free AI workout app!
        </p>
        <button className={styles.button}>
          <div className={styles.button_border}></div>Join Now.
        </button>
      </div>
      <div className={styles.highlights}></div>
    </div>
  );
}
