import styles from "./components.module.css";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className={styles.cta} id="apply">
      <div className={`container ${styles.ctaInner}`}>
        <span className="eyebrow">Next cohort opens soon</span>
        <h2 className={styles.ctaTitle}>Ready to do some real work?</h2>
        <p className={styles.ctaBody}>
          The sprint fills fast. If it sounds like what you need, 
          let's talk before the next cohort closes.
        </p>
        <div className={styles.ctaActions}>
          <Link href="mailto:andrew@rockwellfellowship.com" className="btn">
            Apply for the Sprint
          </Link>
          <Link href="mailto:andrew@rockwellfellowship.com" className={styles.ctaLink}>
            Or just reach out
          </Link>
        </div>
      </div>
    </section>
  );
}
