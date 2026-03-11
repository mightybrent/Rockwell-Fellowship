import styles from './page.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.aboutContent}>
          <h2>Driven by Purpose. Defined by Action.</h2>
          <p>Since our founding, the Rockwell Fellowship has believed that profound change happens when visionary individuals are given the resources to execute.</p>
          <p>We work directly with leaders at the intersection of public policy, social entrepreneurship, and grassroots organizing to build resilient and equitable systems.</p>
        </div>
        <div className={styles.aboutStats}>
          <div className={styles.statItem}>
            <h4>10+</h4>
            <p>Years of Impact</p>
          </div>
          <div className={styles.statItem}>
            <h4>$5M+</h4>
            <p>In community grants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
