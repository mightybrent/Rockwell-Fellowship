import styles from './page.module.css';

export default function Impact() {
  return (
    <section id="impact" className={styles.impact}>
      <div className="container">
        <h2>By the Numbers</h2>
        <div className={styles.impactGrid}>
          <div>
            <div className={styles.impactNumber}>1,500+</div>
            <div className={styles.impactLabel}>Fellows Mentored</div>
          </div>
          <div>
            <div className={styles.impactNumber}>40+</div>
            <div className={styles.impactLabel}>Countries Reached</div>
          </div>
          <div>
            <div className={styles.impactNumber}>200+</div>
            <div className={styles.impactLabel}>Initiatives Funded</div>
          </div>
        </div>
      </div>
    </section>
  );
}
