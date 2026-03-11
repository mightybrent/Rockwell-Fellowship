import Link from 'next/link';
import styles from './page.module.css';

export default function Programs() {
  const programs = [
    {
      meta: 'Global Leadership',
      title: 'Leadership Initiative',
      desc: 'An intensive 12-month program cultivating skills in civic engagement and structural governance for mid-career professionals.'
    },
    {
      meta: 'Local Impact',
      title: 'Community Grants',
      desc: 'Financial backing for grassroots organizations leading the charge in sustainable community development and education.'
    },
    {
      meta: 'Knowledge Transfer',
      title: 'Mentorship Excellence',
      desc: 'Pairing emerging leaders with established industry veterans to foster cross-generational knowledge sharing.'
    }
  ];

  return (
    <section id="programs" className={styles.programs}>
      <div className="container">
        <div className={styles.programsHeader}>
          <h2>Core Programs</h2>
          <p>Investments in the future of our society.</p>
        </div>
        <div className={styles.programsGrid}>
          {programs.map((p, i) => (
            <div key={i} className={styles.programCard}>
              <span className={styles.programMeta}>{p.meta}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link href="#" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Learn more &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
