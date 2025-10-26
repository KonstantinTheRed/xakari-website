"use client";

import Join from "../Join/Join";
import styles from "./styles.module.css";
// Import the new components from the file we just created
import { Carousel, Slide } from "../Carousel/Carousel";

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

      {/* The slideshow div now contains your Carousel */}
      <div className={styles.slideshow}>
        <Carousel>
          <Slide>
            <></>
          </Slide>
          <Slide>
            <div className={styles.slide}>
              <iframe
                src="https://player.vimeo.com/video/1130588317?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "relative", height: "90%", width: "100%" }}
                title="Xavier Interview 2"
              ></iframe>

              <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
          </Slide>
          <Slide>
            <div className={styles.slide}>
              <img
                src="/imgs/video_shoot.jpg"
                style={{
                  height: "66%",
                  // FIXED: Changed "100vw" to "100%"
                  // "100%" respects the parent (.slide) container,
                  // while "100vw" can easily cause overflow on mobile.
                  width: "100%",
                  maxWidth: "100%", // FIXED: Changed "100vw" to "100%"
                  objectFit: "cover",
                  objectPosition: "0px -15px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  height: "33%",

                  boxShadow: "0px 0px 15px rgba(0,0,0,1)",
                  color: "rgba(200,200,200,1)",
                  padding: "1% 5%",
                  paddingBottom: "8%",
                  fontSize: "90%",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    marginBottom: "1%",
                    fontWeight: "100",
                    width: "100%",
                    textAlign: "center",
                    color: "rgba(200,200,200,1)",
                  }}
                >
                  First Xakari Shoot
                </h2>
                <p style={{ margin: "0px" }}>
                  Come and visit out Xakari shoots, where you get a
                  behind-the-scenes look at how our production staff operates.
                  We just had our first and second shoots and are excited for
                  what's coming soon!
                </p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  );
}
