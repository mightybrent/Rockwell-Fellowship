"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 72px",
      background: scrolled ? "rgba(26,25,22,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
    }}>
      <a href="#" style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/2019 to 2025.png"
          alt="Rockwell Fellowship"
          width={120}
          height={24}
          style={{ height: 20, width: "auto", opacity: 0.4, objectFit: "contain" }}
        />
      </a>
      <ul style={{
        display: "flex",
        alignItems: "center",
        gap: 40,
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        {[
          { label: "Approach", href: "#about" },
          { label: "Work Together", href: "#programs" },
          { label: "About", href: "#andrew" },
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} style={{
              fontSize: 13,
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.target.style.color = "#fff"}
            onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.7)"}
            >{item.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#b8922a",
            border: "1px solid rgba(184,146,42,0.4)",
            padding: "8px 20px",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.target.style.borderColor = "#b8922a"; e.target.style.color = "#fff"; e.target.style.background = "#b8922a"; }}
          onMouseLeave={e => { e.target.style.borderColor = "rgba(184,146,42,0.4)"; e.target.style.color = "#b8922a"; e.target.style.background = "transparent"; }}
          >Get in Touch</a>
        </li>
      </ul>
    </nav>
  );
}
