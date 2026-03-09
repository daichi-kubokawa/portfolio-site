"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className={styles.root}>
        <div className={`containerHeader ${styles.inner}`}>
          <Link
            href="/"
            className={`fontEn ${styles.logo}`}
            onClick={handleClose}
          >
            Daichi Kubokawa
          </Link>

          <nav className={styles.nav} aria-label="Global navigation">
            <Link href="/#works" className={`fontEn ${styles.link}`}>
              Works
            </Link>

            <Link href="/about" className={`fontEn ${styles.link}`}>
              About
            </Link>

            <a
              href="mailto:contact@daichikubokawa.com"
              className={`fontEn ${styles.link}`}
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className={styles.menuButton}
            onClick={handleOpen}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="global-menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className={styles.overlay}
          id="global-menu"
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.overlayInner}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <nav className={styles.modalNav} aria-label="Mobile navigation">
              <Link
                href="/#works"
                className={`fontEn ${styles.modalLink}`}
                onClick={handleClose}
              >
                Works
              </Link>

              <Link
                href="/about"
                className={`fontEn ${styles.modalLink}`}
                onClick={handleClose}
              >
                About
              </Link>

              <a
                href="mailto:contact@daichikubokawa.com"
                className={`fontEn ${styles.modalLink}`}
                onClick={handleClose}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
