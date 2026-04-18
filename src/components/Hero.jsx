import Image from "next/image";

export default function Hero() {
  return (
    <section style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: "100vh",
      padding: 0,
    }}>
      {/* Left — text */}
      <div style={{
        background: "#1a1916",
        padding: "120px 72px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <span style={{
          display: "block",
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#b8922a",
          fontWeight: 500,
          marginBottom: 24,
        }}>Leadership Coaching &amp; Talent Advisory</span>

        <h1 style={{
          fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
          fontSize: "clamp(32px, 4vw, 54px)",
          fontWeight: 400,
          lineHeight: 1.08,
          color: "#fff",
          marginBottom: 24,
        }}>
          Has your leadership kept pace with your <em style={{ fontStyle: "italic", color: "#b8922a" }}>company?</em>
        </h1>

        <p style={{
          fontSize: 17,
          fontWeight: 300,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          maxWidth: 460,
          marginBottom: 44,
        }}>
          I work with founders and senior leaders navigating the moment when their business changes faster than their skills or sense of self can keep up.
        </p>

        <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
          <a href="#programs" style={{
            display: "inline-block",
            padding: "14px 32px",
            background: "#b8922a",
            color: "#fff",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}>See how we work</a>

          <a href="#andrew" style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            letterSpacing: "0.02em",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: 2,
          }}>Learn about Andrew</a>
        </div>
      </div>

      {/* Right — photo with overlay content */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: 500 }}>
        {/* Background photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/ren-ran-O-8Fmpx7HqQ-unsplash (1).jpg"
            alt="Leadership coaching context"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />
        </div>
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom right, rgba(26,25,22,0.6), rgba(26,25,22,0.3))",
        }} />

        {/* Overlay content */}
        <div style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "48px",
          minHeight: 500,
        }}>
          <div style={{
            background: "rgba(26,25,22,0.7)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "32px 36px",
            maxWidth: 400,
          }}>
            <div style={{
              fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
              fontSize: 48,
              color: "#b8922a",
              opacity: 0.5,
              lineHeight: 1,
              marginBottom: 12,
            }}>"</div>
            <p style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.65,
              marginBottom: 20,
              fontStyle: "italic",
              maxWidth: "none",
            }}>
              I've watched capable people get stuck when their business changes faster than their skills or personal transformation can catch up.
            </p>
            <p style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.04em",
            }}>— Andrew Smith, Founder</p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
              marginTop: 28,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                  fontSize: 28,
                  color: "#fff",
                  fontWeight: 400,
                }}>15+</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", marginTop: 4 }}>
                  Years in org leadership
                </div>
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
                  fontSize: 28,
                  color: "#fff",
                  fontWeight: 400,
                }}>F200</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", marginTop: 4 }}>
                  to venture-backed startups
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
