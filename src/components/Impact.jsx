"use client";
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime = null;
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <div ref={ref} className={styles.impactNumber}>{count}{suffix}</div>;
}

export default function Impact() {
  return (
    <section id="impact" className={styles.impact}>
      <div className="container">
        <h2>By the Numbers</h2>
        <div className={styles.impactGrid}>
          <div className={styles.impactStat}>
            <CountUp end={1500} suffix="+" />
            <div className={styles.impactLabel}>Fellows Mentored</div>
            <p className={styles.impactSubLabel}>Across 6 cohorts since 2014</p>
          </div>
          <div className={styles.impactStat}>
            <CountUp end={40} suffix="+" />
            <div className={styles.impactLabel}>Countries Reached</div>
            <p className={styles.impactSubLabel}>Spanning 5 continents</p>
          </div>
          <div className={styles.impactStat}>
            <CountUp end={200} suffix="+" />
            <div className={styles.impactLabel}>Initiatives Funded</div>
            <p className={styles.impactSubLabel}>Driving structural, systemic change</p>
          </div>
        </div>
      </div>
    </section>
  );
}
