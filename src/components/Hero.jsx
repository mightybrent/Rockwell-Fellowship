import Link from 'next/link';
import styles from './page.module.css';
import compStyles from './components.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <h1>Transform Lives. <span className={styles.heroAccent}>Empower Communities.</span></h1>
        <p>The Rockwell Fellowship is a premier initiative designed to support and equip the next generation of transformational leaders.</p>
        <Link href="#programs" className={compStyles.buttonAccent}>Explore Our Programs</Link>
      </div>
    </section>
  );
}
