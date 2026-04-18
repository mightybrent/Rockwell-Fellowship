export default function Programs() {
  const specs = [
    { label: "Sessions", value: "5 sessions + intake" },
    { label: "Duration", value: "6 weeks" },
    { label: "Spots", value: "10 per quarter" },
  ];

  return (
    <section style={{
      background: "#faf8f3",
      borderTop: "1px solid rgba(26,25,22,0.12)",
      padding: "100px 72px",
    }} id="programs">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span style={{
          display: "block",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#b8922a",
          fontWeight: 500,
          marginBottom: 16,
        }}>Work Together</span>
        <h2 style={{
          fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
          fontSize: "clamp(28px, 3.5vw, 42px)",
          fontWeight: 400,
          color: "#1a1916",
          lineHeight: 1.15,
          marginBottom: 0,
        }}>
          Two ways to <em style={{ fontStyle: "italic" }}>engage</em>
        </h2>

        {/* Coaching Sprint */}
        <div style={{ marginTop: 64 }}>
          <span style={{
            display: "block",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8922a",
            marginBottom: 16,
          }}>For rapid change</span>
          <h3 style={{
            fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1916",
            marginBottom: 24,
          }}>The Coaching Sprint</h3>
          <p style={{
            fontSize: 17,
            fontWeight: 300,
            color: "#4a4842",
            lineHeight: 1.8,
            maxWidth: 680,
            marginBottom: 14,
          }}>
            Five sessions over six weeks. One focused challenge. Concentrated enough to create real movement — spaced enough that you can actually think between sessions.
          </p>
          <p style={{
            fontSize: 17,
            fontWeight: 300,
            color: "#4a4842",
            lineHeight: 1.8,
            maxWidth: 680,
          }}>
            This isn't general coaching. You bring a specific problem — a decision you're avoiding, a pattern you keep repeating, a leadership moment you can't quite see clearly. We dig into it, hard, until something breaks open.
          </p>

          <div style={{
            border: "1px solid rgba(26,25,22,0.12)",
            borderRadius: 8,
            marginTop: 32,
            overflow: "hidden",
            background: "#fff",
          }}>
            <div style={{
              padding: "28px 36px",
              borderBottom: "1px solid rgba(26,25,22,0.12)",
            }}>
              <h4 style={{
                fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                fontSize: 22,
                fontWeight: 400,
                color: "#1a1916",
                marginBottom: 6,
              }}>Coaching Sprint — Q2 2026</h4>
              <p style={{ fontSize: 13, color: "#8a8880", maxWidth: "none" }}>
                10 spots · quarterly · next cohort opens May
              </p>
            </div>
            <div style={{ padding: "32px 36px" }}>
              <p style={{
                fontSize: 16,
                color: "#4a4842",
                lineHeight: 1.8,
                marginBottom: 32,
                maxWidth: "none",
              }}>
                Every sprint begins with a 30-minute intake — just the two of us, no agenda, figuring out what you actually need to work on. Then five hour-long sessions, every other week or so, followed by a check-in 30 days out to see what held. You also get a journal to think between sessions, because the work happens there too.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 2,
                marginBottom: 32,
                border: "1px solid rgba(26,25,22,0.12)",
                borderRadius: 4,
                overflow: "hidden",
              }}>
                {specs.map((spec) => (
                  <div key={spec.label} style={{ padding: "16px 20px", background: "#faf8f3" }}>
                    <span style={{
                      display: "block",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#8a8880",
                      marginBottom: 6,
                    }}>{spec.label}</span>
                    <span style={{
                      display: "block",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#1a1916",
                    }}>{spec.value}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" style={{
                display: "block",
                textAlign: "center",
                padding: 16,
                border: "1px solid rgba(26,25,22,0.12)",
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 400,
                color: "#1a1916",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}>Apply for the next sprint →</a>
            </div>
          </div>
        </div>

        {/* Ongoing Coaching */}
        <div style={{
          marginTop: 80,
          paddingTop: 80,
          borderTop: "1px solid rgba(26,25,22,0.12)",
        }}>
          <span style={{
            display: "block",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b8922a",
            marginBottom: 16,
          }}>Ongoing Coaching</span>
          <h3 style={{
            fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(22px, 2.5vw, 32px)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#1a1916",
            marginBottom: 24,
            maxWidth: 600,
          }}>Longer engagements for leaders who want a steady thinking partner.</h3>
          <p style={{
            fontSize: 17,
            fontWeight: 300,
            color: "#4a4842",
            lineHeight: 1.8,
            maxWidth: 680,
          }}>
            For leaders navigating something that doesn't resolve in a month. We meet regularly, build a shared language for what's actually happening, and work over time toward something more durable than insight.
          </p>

          <div style={{
            border: "1px solid rgba(26,25,22,0.12)",
            borderRadius: 8,
            marginTop: 32,
            background: "#fff",
            overflow: "hidden",
          }}>
            <div style={{ padding: "32px 36px" }}>
              <div style={{ paddingBottom: 24 }}>
                <h4 style={{
                  fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1a1916",
                  marginBottom: 10,
                }}>Leadership retainer</h4>
                <p style={{ fontSize: 15, color: "#4a4842", lineHeight: 1.7, maxWidth: "none" }}>
                  Ongoing 1:1 coaching on a regular cadence — typically twice a month. Best for executives navigating sustained complexity: scale, role change, identity, leadership growth. Inquire for pricing.
                </p>
              </div>

              <div style={{
                paddingTop: 24,
                borderTop: "1px solid rgba(26,25,22,0.12)",
                marginTop: 0,
              }}>
                <h4 style={{
                  fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                  fontSize: 18,
                  fontWeight: 400,
                  color: "#1a1916",
                  marginBottom: 10,
                }}>Leadership advising for teams</h4>
                <p style={{ fontSize: 15, color: "#4a4842", lineHeight: 1.7, maxWidth: "none" }}>
                  Brought in by a board, a CEO, or a VP of People to work directly with a leader or small team. Results-forward, not soft. Inquire for scope and pricing.
                </p>
              </div>

              <a href="#contact" style={{
                display: "block",
                textAlign: "center",
                padding: 16,
                border: "1px solid rgba(26,25,22,0.12)",
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 400,
                color: "#1a1916",
                textDecoration: "none",
                letterSpacing: "0.02em",
                marginTop: 32,
              }}>Start a conversation →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
