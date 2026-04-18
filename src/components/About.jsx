import Image from "next/image";

export default function About() {
  return (
    <>
      {/* POV Strip */}
      <div style={{
        position: "relative",
        padding: "80px 72px",
        overflow: "hidden",
        background: "#1a1916",
      }}>
        {/* Background photo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/dominik-schroder-FIKD9t5_5zQ-unsplash (1).jpg"
            alt="Office context"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(26,25,22,0.87)",
          }} />
        </div>

        <div style={{
          position: "relative", zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          <div>
            <div style={{
              width: 32,
              height: 2,
              background: "#b8922a",
              marginBottom: 28,
            }} />
            <h2 style={{
              fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 38px)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.2,
            }}>
              Not cheerleading. Not fluff. <em style={{ fontStyle: "italic", color: "#b8922a" }}>Real partnership and impact.</em>
            </h2>
          </div>
          <div>
            <p style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              marginBottom: 16,
              maxWidth: "none",
            }}>
              I coach because I know the toll that growing behind the pace of organizations takes on leaders. I came up inside organizations — running HR and talent strategy through hypergrowth, layoffs, leadership transitions, and the kind of ambiguity that doesn't fit in a framework.
            </p>
            <p style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "none",
            }}>
              When you work with me, you get a partner, coach, and advisor who understands organizational reality and won't let you stay comfortable with a story that isn't serving you anymore.
            </p>
          </div>
        </div>
      </div>

      {/* Who Section */}
      <section style={{
        background: "#fff",
        padding: "100px 72px",
        borderTop: "1px solid rgba(26,25,22,0.12)",
        position: "relative",
      }} id="about">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{
            display: "block",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#b8922a",
            fontWeight: 500,
            marginBottom: 16,
          }}>Right Fit</span>
          <h2 style={{
            fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 400,
            color: "#1a1916",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Who is this <em style={{ fontStyle: "italic" }}>actually</em> for
          </h2>
          <p style={{
            fontSize: 16,
            color: "#4a4842",
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: 12,
          }}>
            You're good at your job. You've been good at it for a while. Something shifted.
          </p>
          <p style={{
            fontSize: 16,
            color: "#4a4842",
            lineHeight: 1.7,
            maxWidth: 680,
            marginBottom: 48,
          }}>
            This isn't for people who need to be taught how to lead. It's for people who already know how — and have reached the point where more information isn't what's missing.
          </p>

          <div style={{ border: "1px solid rgba(26,25,22,0.12)" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "The founder who built something real, but now leads 40 people the way they led 4 — and can feel the drag.",
                "The VP who keeps getting promoted into roles that require something their track record can't fully prepare them for.",
                "The person at an inflection point — a transition, a decision, a moment they can't quite name — who needs space to think, not someone to cheer them on.",
                "The leader who's been losing themselves to the role — and is ready to reclaim some perspective before that gap gets wider.",
              ].map((item, i) => (
                <li key={i} style={{
                  padding: "24px 32px 24px 52px",
                  fontSize: 15,
                  color: "#4a4842",
                  lineHeight: 1.55,
                  position: "relative",
                  borderBottom: i < 3 ? "1px solid rgba(26,25,22,0.08)" : "none",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 32,
                    top: 34,
                    width: 6,
                    height: 1,
                    background: "#b8922a",
                    display: "block",
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
