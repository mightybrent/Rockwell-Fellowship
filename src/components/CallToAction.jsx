import Link from 'next/link';
import styles from './page.module.css';
import compStyles from './components.module.css';

export default function CallToAction() {
  return (
    <section id="apply" className={styles.cta}>
      <div className="container">
        <h2>Ready to make an impact?</h2>
        <p>Join a global network of leaders dedicated to actionable change.</p>
        <Link href="#apply" className={compStyles.button} style={{ background: 'var(--foreground)', color: 'var(--color-white)' }}>
          Start Your Application
        </Link>
      </div>
    </section>
  );
}
