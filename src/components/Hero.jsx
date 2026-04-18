import styles from "./components.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.gridMain}`}>
        <div className={styles.heroContent}>
          <span className="eyebrow">Strategic Executive Coaching</span>
          <h1 className={styles.heroTitle}>
            Has your leadership kept pace with your company?
          </h1>
          <p className={styles.heroBody}>
            I work with founders and senior leaders navigating the moment when 
            their business changes faster than their skills or sense of self can keep up.
          </p>
          <div className={styles.heroActions}>
            <Link href="#apply" className="btn">
              Apply for the sprint
            </Link>
            <Link href="#programs" className={styles.heroLink}>
              View our programs
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageOverlay}>
            <Image 
              src="/images/pexels-quang-nguyen-vinh-2132087 (1).jpg" 
              alt="Leadership context" 
              fill
              className={styles.heroImg}
              priority
            />
            {/* Stat/Quote Card */}
            <div className={styles.statCard}>
              <div className={styles.statIcon}>“</div>
              <p className={styles.statText}>
                If frameworks were all you needed, every leader reading Good to Great would be crushing it. 
                I bring care, truth, and growth into every coaching partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
