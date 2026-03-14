"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleClose();

    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleWorksClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleClose();

    if (pathname === "/") {
      e.preventDefault();
      const target = document.getElementById("works");

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleMediaChange);
    document.body.style.overflow = "hidden";

    if (mediaQuery.matches) {
      handleClose();
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleMediaChange);
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
            onClick={handleLogoClick}
          >
            DAICHI KUBOKAWA
          </Link>

          <nav className={styles.nav} aria-label="Global navigation">
            <Link
              href="/#works"
              className={`fontEn ${styles.link}`}
              onClick={handleWorksClick}
            >
              WORKS
            </Link>

            <Link
              href="/about"
              className={`fontEn ${styles.link}`}
              onClick={handleClose}
            >
              ABOUT
            </Link>

            <a
              href="mailto:contact@daichikubokawa.com"
              className={`fontEn ${styles.link}`}
            >
              CONTACT
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            id="global-menu"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            <div className={`containerHeader ${styles.overlayHeader}`}>
              <Link
                href="/"
                className={`fontEn ${styles.overlayLogo}`}
                onClick={handleLogoClick}
              >
                DAICHI KUBOKAWA
              </Link>

              <button
                type="button"
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <motion.div
              className={`containerHeader ${styles.overlayInner}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{
                duration: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <nav className={styles.modalNav} aria-label="Mobile navigation">
                <Link
                  href="/#works"
                  className={`fontEn ${styles.modalLink}`}
                  onClick={handleWorksClick}
                >
                  WORKS
                </Link>

                <Link
                  href="/about"
                  className={`fontEn ${styles.modalLink}`}
                  onClick={handleClose}
                >
                  ABOUT
                </Link>

                <a
                  href="mailto:contact@daichikubokawa.com"
                  className={`fontEn ${styles.modalLink}`}
                  onClick={handleClose}
                >
                  CONTACT
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>{" "}
    </>
  );
}
