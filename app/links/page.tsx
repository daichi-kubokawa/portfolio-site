import Link from "next/link";
import styles from "./page.module.css";

const links = [
  {
    label: "Portfolio",
    href: "/",
    note: "Selected projects and case studies",
  },
  {
    label: "Contact",
    href: "mailto:contact@daichikubokawa.com",
    note: "For work inquiries and collaboration",
    external: true,
  },
];

export default function LinksPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <header className={styles.heading}>
            <h1 className={`fontEn ${styles.title}`}>DAICHI KUBOKAWA</h1>
            <p className={`fontEn ${styles.role}`}>UI / UX Designer</p>
          </header>

          <div className={styles.list}>
            {links.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} className={styles.card}>
                  <div className={styles.cardBody}>
                    <h2 className={`fontEn ${styles.cardTitle}`}>
                      {link.label}
                    </h2>
                    <p className={styles.cardNote}>{link.note}</p>
                  </div>
                  <span className={`fontEn ${styles.arrow}`}>→</span>
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={styles.card}>
                  <div className={styles.cardBody}>
                    <h2 className={`fontEn ${styles.cardTitle}`}>
                      {link.label}
                    </h2>
                    <p className={styles.cardNote}>{link.note}</p>
                  </div>
                  <span className={`fontEn ${styles.arrow}`}>→</span>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
