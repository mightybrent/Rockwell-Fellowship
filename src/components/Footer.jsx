import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{
      background: "#faf8f3",
      borderTop: "1px solid rgba(26,25,22,0.12)",
      padding: "32px 72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      <span style={{
        fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#8a8880",
      }}>The Rockwell Fellowship</span>
      <span style={{ fontSize: 12, color: "#8a8880" }}>
        © {new Date().getFullYear()} · All rights reserved
      </span>
    </footer>
  );
}
