import styles from "./styles.module.css";
interface JoinProps {}

export default function Join(props: JoinProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Join the Fitness Revolution</h2>
      <p className={styles.desc}>
        Start your fitness journey with a free AI workout app!
      </p>
      <button className={styles.button}>Join Now.</button>
    </div>
  );
}
