import Link from 'next/link';
import styles from './page.module.css';
import compStyles from './components.module.css';

export default function CallToAction() {
  return (
    <section id="apply" className={styles.cta}>
      <div className="container">
        <h2>Applications for the 2026 cohort are now open.</h2>
        <p className={styles.ctaSubtitle}>12 spots remain for the 2026 Leadership Initiative.</p>
        <Link href="#apply" className={compStyles.buttonAccent}>
          Start Your Application
        </Link>
      </div>
    </section>
  );
}
