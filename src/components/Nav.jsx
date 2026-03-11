"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './components.module.css';

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMark}>RF</span>
        Rockwell Fellowship
      </Link>
      <div className={styles.navLinks}>
        <Link href="#about" className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}>About</Link>
        <Link href="#programs" className={`${styles.navLink} ${activeSection === 'programs' ? styles.active : ''}`}>Programs</Link>
        <Link href="#impact" className={`${styles.navLink} ${activeSection === 'impact' ? styles.active : ''}`}>Impact</Link>
        <Link href="#apply" className={styles.button}>Apply Now</Link>
      </div>
    </nav>
  );
}
