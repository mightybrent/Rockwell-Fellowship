export default function Testimonials() {
  const testimonials = [
    {
      quote: "Working with Andrew has been phenomenal. He creates a space for you to deeply reflect on the log jams that have been impeding your professional and personal growth. Andrew knows the right questions at the right time. I've gained a lot since working with him — and my business has as well.",
      name: "CEO & Founder",
      role: "Nationally distributed business · $50–70M ARR",
    },
    {
      quote: "As a result of Andrew's coaching I have a better understanding of my unique gifts, my leadership style, and the people I work with. And I have a clear, actionable plan for achieving my desired outcomes.",
      name: "Steve",
      role: "Executive Leader",
    },
    {
      quote: "Andrew is particularly gifted at synthesizing a variety of thoughts into a coherent and helpful framework for decision making. He helped me see things I had been mulling over for weeks in a new light.",
      name: "Sprint participant",
      role: "Fortune 500 Director",
    },
  ];

  return (
    <section style={{
      background: "#faf8f3",
      borderTop: "1px solid rgba(26,25,22,0.12)",
      padding: "100px 72px",
    }} id="testimonials">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{
          display: "block",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#b8922a",
          fontWeight: 500,
          marginBottom: 16,
        }}>From clients</span>
        <h2 style={{
          fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
          fontSize: "clamp(28px, 3.5vw, 42px)",
          fontWeight: 400,
          color: "#1a1916",
          lineHeight: 1.15,
          marginBottom: 48,
        }}>What people say</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1,
          border: "1px solid rgba(26,25,22,0.12)",
        }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", padding: 36 }}>
              <div style={{
                fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                fontSize: 48,
                color: "#b8922a",
                opacity: 0.35,
                lineHeight: 1,
                marginBottom: 12,
              }}>"</div>
              <p style={{
                fontSize: 15,
                color: "#4a4842",
                lineHeight: 1.7,
                marginBottom: 20,
                fontStyle: "italic",
                maxWidth: "none",
              }}>{t.quote}</p>
              <div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#1a1916", maxWidth: "none" }}>{t.name}</p>
                <p style={{ fontSize: 12, color: "#8a8880", marginTop: 2, maxWidth: "none" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
