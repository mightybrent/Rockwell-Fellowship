import styles from './page.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsHeader}>
          <h2>Voices of Change</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&quot;The Rockwell Fellowship provided not only the capital, but the strategic guidance needed to scale our education initiative nationwide.&quot;</p>
            <span className={styles.quoteAuthor}>Sarah Jenkins</span>
            <span className={styles.quoteRole}>2022 Fellow & Founder</span>
          </div>
          <div className={styles.quoteCard}>
            <p className={styles.quoteText}>&quot;Being part of this network means having lifetime access to visionaries who genuinely care about structural impact.&quot;</p>
            <span className={styles.quoteAuthor}>David Chen</span>
            <span className={styles.quoteRole}>Community Leader</span>
          </div>
        </div>
      </div>
    </section>
  );
}
