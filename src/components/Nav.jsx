import Link from 'next/link';
import styles from './components.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMark}>RF</span>
        Rockwell Fellowship
      </Link>
      <div className={styles.navLinks}>
        <Link href="#about" className={styles.navLink}>About</Link>
        <Link href="#programs" className={styles.navLink}>Programs</Link>
        <Link href="#impact" className={styles.navLink}>Impact</Link>
        <Link href="#apply" className={styles.button}>Apply Now</Link>
      </div>
    </nav>
  );
}
