import Link from 'next/link';
import styles from './components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerCol}>
          <Link href="/" className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
            <span className={styles.logoMark}>RF</span>
            Rockwell Fellowship
          </Link>
          <p style={{ maxWidth: '300px', lineHeight: '1.6', marginTop: '1rem', color: '#ccc', fontFamily: 'var(--font-body)' }}>
            Empowering visionary individuals to drive transformative change and build stronger, more resilient communities.
          </p>
        </div>
        <div className={styles.footerCol}>
          <h3>Programs</h3>
          <div className={styles.footerLinks}>
            <Link href="#leadership">Leadership Initiative</Link>
            <Link href="#community">Community Grants</Link>
            <Link href="#mentorship">Mentorship Excellence</Link>
            <Link href="#alumni">Alumni Network</Link>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h3>Connect</h3>
          <div className={styles.footerLinks}>
            <Link href="#contact">Contact Us</Link>
            <Link href="#linkedin">LinkedIn</Link>
            <Link href="#twitter">Twitter / X</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span>&copy; {new Date().getFullYear()} Rockwell Fellowship. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="#privacy">Privacy Policy</Link>
          <Link href="#terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
