import styles from "./components.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>RF</span>
              <span className={styles.logoName}>Rockwell Fellowship</span>
            </Link>
          </div>
          
          <div className={styles.footerLinks}>
            <Link href="#about" className={styles.footerLink}>About</Link>
            <Link href="#programs" className={styles.footerLink}>Programs</Link>
            <Link href="#testimonials" className={styles.footerLink}>Impact</Link>
          </div>

          <div className={styles.footerLegal}>
            <p>&copy; {new Date().getFullYear()} Rockwell Fellowship. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
