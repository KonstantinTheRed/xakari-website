import Join from "../Join/Join";
import styles from "./styles.module.css";
interface BannerProps {
  video_source: string;
  img_source?: string;
  width: string;
  height: string;
}

export default function Banner(props: BannerProps) {
  return (
    <div
      className={styles.container}
      style={{ height: props.height, width: props.width }}
    >
      <div className={styles.overlay}></div>
      <video
        className={styles.video}
        autoPlay
        preload="none"
        muted
        loop
        height="100%"
        width="100% !important"
      >
        <source src={props.video_source} type="video/mp4"></source>
      </video>
      <Join />
    </div>
  );
}
