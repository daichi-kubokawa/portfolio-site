"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTopButton.module.css";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`${styles.button} ${isVisible ? styles.isVisible : ""}`}
      onClick={handleClick}
      aria-label="ページ上部へ戻る"
    >
      <span className={`material-symbols-outlined ${styles.icon}`}>north</span>
    </button>
  );
}
