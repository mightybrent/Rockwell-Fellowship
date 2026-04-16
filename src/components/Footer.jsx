import styles from "./components.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <Link href="/" className={styles.footerLogo}>
          <span className={styles.logoMark}>RF</span>
          <span className={styles.footerLogoName}>Rockwell Fellowship</span>
        </Link>
      </div>
    </footer>
  );
}
