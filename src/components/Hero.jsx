import styles from "./components.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroInner}`}>
        <span className="eyebrow">Leadership Coaching · Washington D.C.</span>
        <h1 className={styles.heroTitle}>
          Capable people get stuck when their business grows faster than they do.
        </h1>
        <p className={styles.heroBody}>
          I work with founders and senior leaders at scaling companies — people
          who are functional, successful, and quietly carrying more than they
          should. Not stuck-stuck. Just… not moving the way they used to.
        </p>
        <div className={styles.heroActions}>
          <Link href="#apply" className={styles.btnPrimary}>
            Apply for the sprint →
          </Link>
          <Link href="#programs" className={styles.btnOutline}>
            Learn about coaching
          </Link>
        </div>
      </div>
    </section>
  );
}
