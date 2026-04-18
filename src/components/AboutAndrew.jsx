import Image from "next/image";

export default function AboutAndrew() {
  const credentials = [
    "Georgetown University Coach",
    "15+ Years Org Leadership",
    "Fortune 500 → Startups",
    "ICF-ACC Certified",
    "HR & Talent Strategy",
  ];

  return (
    <section style={{
      background: "#fff",
      borderTop: "1px solid rgba(26,25,22,0.12)",
      padding: "100px 72px",
    }} id="andrew">
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.3fr",
        gap: 80,
        alignItems: "start",
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {/* Photo */}
        <div style={{ position: "relative" }}>
          <Image
            src="/images/mediensturmer-aWf7mjwwJJo-unsplash (1).jpg"
            alt="Andrew Smith"
            width={500}
            height={640}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: 3,
            background: "#b8922a",
          }} />
        </div>

        {/* Bio */}
        <div>
          <h2 style={{
            fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
            fontSize: 28,
            fontWeight: 400,
            color: "#1a1916",
            marginBottom: 4,
          }}>Andrew Smith</h2>
          <span style={{
            display: "block",
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#b8922a",
            marginBottom: 24,
          }}>Founder, Executive Coach</span>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={{ fontSize: 16, color: "#4a4842", lineHeight: 1.8, maxWidth: "none" }}>
              I led People and HR functions at scaling companies — from high-growth startups to Fortune 500 organizations. I've been in the room when the org restructures. I've run the layoff. I've watched capable leaders get smaller as their companies got larger, and helped them find their way back.
            </p>
            <p style={{ fontSize: 16, color: "#4a4842", lineHeight: 1.8, maxWidth: "none" }}>
              The Rockwell Fellowship is where I do that work out loud. I'm Georgetown-trained in executive coaching and formerly ICF-ACC certified. More importantly, I've been coaching leaders informally for most of my career — in hallways, over coffee, and in those 1:1s that went longer than scheduled because something real was happening.
            </p>
            <p style={{ fontSize: 16, color: "#4a4842", lineHeight: 1.8, maxWidth: "none" }}>
              I'm direct and warm. I won't cheerleader you. I'll help you think.
            </p>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 24,
          }}>
            {credentials.map((c) => (
              <span key={c} style={{
                fontSize: 11,
                padding: "6px 14px",
                border: "1px solid rgba(26,25,22,0.12)",
                color: "#4a4842",
                letterSpacing: "0.04em",
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
