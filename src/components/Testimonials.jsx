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
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quoteText}>The Rockwell Fellowship provided not only the capital, but the strategic guidance needed to scale our education initiative nationwide.</p>
            <div className={styles.quoteFooter}>
              <div className={styles.quoteAvatar}>SJ</div>
              <div>
                <span className={styles.quoteAuthor}>Sarah Jenkins</span>
                <span className={styles.quoteRole}>2022 Fellow & Founder</span>
              </div>
            </div>
          </div>
          <div className={styles.quoteCard}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quoteText}>Being part of this network means having lifetime access to visionaries who genuinely care about structural impact.</p>
            <div className={styles.quoteFooter}>
              <div className={styles.quoteAvatar}>DC</div>
              <div>
                <span className={styles.quoteAuthor}>David Chen</span>
                <span className={styles.quoteRole}>Community Leader</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
