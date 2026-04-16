"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./components.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""} ${menuOpen ? styles.navMenuOpen : ""}`}>
      <Link href="/" className={styles.logo} style={{ zIndex: 110, position: "relative" }}>
        <span className={styles.logoMark}>RF</span>
        <span className={styles.logoName}>Rockwell Fellowship</span>
      </Link>

      <div className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`}>
        <Link href="#about" className={styles.navLink} onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="#programs" className={styles.navLink} onClick={() => setMenuOpen(false)}>Programs</Link>
        <Link href="#testimonials" className={styles.navLink} onClick={() => setMenuOpen(false)}>Clients</Link>
        <Link href="#apply" className={styles.navCta} onClick={() => setMenuOpen(false)}>Get in Touch</Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className={`${styles.hamburgerBar} ${menuOpen ? styles.barOpen1 : ""}`} />
        <span className={`${styles.hamburgerBar} ${menuOpen ? styles.barOpen2 : ""}`} />
        <span className={`${styles.hamburgerBar} ${menuOpen ? styles.barOpen3 : ""}`} />
      </button>
    </nav>
  );
}
