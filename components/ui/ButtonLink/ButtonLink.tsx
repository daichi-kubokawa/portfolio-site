import Link from "next/link";
import styles from "./ButtonLink.module.css";

export default function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`fontSans ${styles.button}`}>
      {children}
    </Link>
  );
}
