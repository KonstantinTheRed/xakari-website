import Banner from "@/components/Banner/Banner";
import styles from "./page_styles/page.module.css";
import Section from "@/components/Section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Section name="splash-page" flow="column" height="100dvh" centered>
        <Banner
          video_source="/vids/Xakari_Cinematic.mp4"
          width="100%"
          height="100%"
        />
      </Section>
      <Section name="xakari-intro" flow="column" height="auto" centered>
        <article className={styles.about}>
          <video
            className={styles.xakari_tutorial}
            autoPlay
            preload="none"
            muted
            loop
          >
            <source src="/vids/Xakari_Tutorial.mp4" type="video/mp4"></source>
          </video>
          <img
            className={styles.xakari_front_app}
            src="imgs/xakari_front_app.png"
          ></img>
          <div>
            <h2>About Xakari</h2>
            <p>
              Xakari is a health and fitness platform utilizing artificial
              intelligence, voice, and camera technology to deliver customized,
              engaging experiences.
              <br />
              <br />
              Our goal is to build a lively health and wellness community. We
              want to offer support and resources for personal fitness and
              health goals. We also aim to help people connect with others who
              have similar interests.
            </p>
          </div>
        </article>
      </Section>
      <Section name="xakari-tutorial-1" flow="column" height="auto" centered>
        <div className={styles.tutorial}>
          <div>
            <img
              className={styles.xakari_front_app}
              src="imgs/xakari_cap_1.png"
            />
            <img
              className={styles.xakari_front_app}
              src="imgs/xakari_cap_2.png"
            />
          </div>
          <article>
            <h2>Personalized workout plans for you.</h2>
            <p>
              Get step-by-step guidance from your personal AI trainer to make
              sure you're doing the exercises correctly.
              <br />
              <br />
              Having the AI trainer to record and monitor movement to inform
              user with AI voice. Which give a new feel as though someone is
              there to guide you on their personal training.
              <br />
              <br />
              The app adapts workouts based on users' performance, making
              exercises easier or harder as needed.
            </p>
          </article>
        </div>
      </Section>
      <Section name="xakari-tutorial-2" flow="column" height="auto" centered>
        <div className={styles.tutorial}>
          <div>
            <img
              className={styles.xakari_front_app}
              src="imgs/xakari_cap_3.png"
            />
            <img
              className={styles.xakari_front_app}
              src="imgs/xakari_cap_4.png"
            />
          </div>
          <article>
            <h2 style={{ color: "rgba(29, 135, 254, 1)" }}>
              Track your progress with every workout
            </h2>
            <p>
              Our AI looks at your performance fitness level, which gives you
              helpful feedback and evaluations. This way, you can see where to
              improve and track your progress. <br />
              <br />
              The app recommends that people record themselves. This helps show
              their progress in workouts. It highlights which exercises they did
              correctly or incorrectly.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
