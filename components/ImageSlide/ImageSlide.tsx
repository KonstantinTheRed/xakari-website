"use client";

import { useRef, useState, useEffect } from "react";
import styles from "../../app/page_styles/page.module.css";

/**
 * A Client Component that animates its children into view when scrolled.
 */

interface ImageSlideProps {
  imgSrc1: string;
  imgAlt1: string;
  imgSrc2: string;
  imgAlt2: string;
  children: React.ReactNode;
}
export default function ImageSlide({
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
  children, // This prop will accept the <article> content
}: ImageSlideProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries: any) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const ref = sectionRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  return (
    <div
      className={`${styles.tutorial} ${isVisible ? styles.isVisible : ""}`}
      ref={sectionRef}
    >
      <div>
        <img
          className={`${styles.xakari_front_app} ${styles.phoneImageLeft}`}
          src={imgSrc1}
          alt={imgAlt1}
        />
        <img
          className={`${styles.xakari_front_app} ${styles.phoneImageRight}`}
          src={imgSrc2}
          alt={imgAlt2}
        />
      </div>
      {children}
    </div>
  );
}
