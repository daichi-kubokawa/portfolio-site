import Link from "next/link";
import styles from "./page.module.css";

const links = [
  {
    label: "Portfolio",
    href: "/",
    note: "トップページ",
  },
  {
    label: "Works",
    href: "/#works",
    note: "制作事例",
  },
  {
    label: "About",
    href: "/about",
    note: "プロフィール",
  },
  {
    label: "Contact",
    href: "mailto:contact@daichikubokawa.com",
    note: "メールで連絡",
    external: true,
  },
];

export default function LinksPage() {
  return (
    <main className={styles.root}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.heading}>
            <p className={`uppercaseLabel ${styles.eyebrow}`}>Links</p>
            <h1 className={`fontEn ${styles.title}`}>Daichi Kubokawa</h1>
            <p className={styles.description}>
              ポートフォリオやプロフィール、連絡先をまとめています。
            </p>
          </div>

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
