"use client";

import React, { useState, Children, ReactNode, useCallback } from "react";
import styles from "./styles.module.css";

interface CarouselProps {
  children: ReactNode;
}

interface SlideProps {
  children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesArray = Children.toArray(children);
  const totalSlides = slidesArray.length;

  // Corrected wrap-around logic for previous slide
  const prevSlide = useCallback(() => {
    // Uses modulo to wrap from slide 0 to the last slide
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Corrected wrap-around logic for next slide
  const nextSlide = useCallback(() => {
    // Uses modulo to wrap from the last slide back to 0
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Don't render controls if there are no slides
  if (totalSlides === 0) {
    return (
      <div className={styles.carousel}>
        <div className={styles.slideContainer}></div>
      </div>
    );
  }

  return (
    <div className={styles.carousel}>
      {/* This container holds all slides and moves horizontally */}
      <div
        className={styles.slideContainer}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          // REMOVED: width: `${totalSlides * 100}%`
          // We let flexbox handle the container width implicitly
          // based on the .slide children (which are width: 100% each).
        }}
      >
        {children}
      </div>

      {/* Bottom Controls Container */}
      <div className={styles.controlsContainer}>
        <button
          onClick={prevSlide}
          className={styles.navButton}
          aria-label="Previous slide"
        >
          &#10094; {/* Left arrow */}
        </button>

        {/* Wrapper for just the dots */}
        <div className={styles.dotsWrapper}>
          {slidesArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${
                index === currentSlide ? styles.active : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className={styles.navButton}
          aria-label="Next slide"
        >
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export function Slide({ children }: SlideProps) {
  return <div className={styles.slide}>{children}</div>;
}
