"use client";
import { useState } from "react";

export default function CallToAction() {
  const [formState, setFormState] = useState({ name: "", email: "", role: "", message: "" });

  return (
    <section style={{
      background: "#1a1916",
      padding: "100px 72px",
    }} id="contact">
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{
          fontFamily: "var(--font-headline, 'Playfair Display', Georgia, serif)",
          fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1.2,
          marginBottom: 16,
        }}>
          Ready to do the <em style={{ fontStyle: "italic", color: "#b8922a" }}>real work?</em>
        </h2>
        <p style={{
          fontSize: 16,
          fontWeight: 300,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          marginBottom: 48,
          maxWidth: "none",
        }}>
          Whether you're interested in the Coaching Sprint or a longer engagement, start here. We'll figure out the right fit together.
        </p>

        <form
          onSubmit={e => e.preventDefault()}
          style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { key: "name", label: "Full Name", placeholder: "Jane Smith", type: "text" },
              { key: "email", label: "Email", placeholder: "jane@company.com", type: "email" },
            ].map((field) => (
              <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                }}>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formState[field.key]}
                  onChange={e => setFormState(s => ({ ...s, [field.key]: e.target.value }))}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    padding: "12px 16px",
                    fontSize: 15,
                    fontFamily: "inherit",
                    outline: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}>Your Role</label>
            <input
              type="text"
              placeholder="CEO, VP of Product, Founder..."
              value={formState.role}
              onChange={e => setFormState(s => ({ ...s, role: e.target.value }))}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                padding: "12px 16px",
                fontSize: 15,
                fontFamily: "inherit",
                outline: "none",
                borderRadius: 0,
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}>What brings you here?</label>
            <textarea
              placeholder="What are you working on, or trying to figure out?"
              value={formState.message}
              onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#fff",
                padding: "12px 16px",
                fontSize: 15,
                fontFamily: "inherit",
                outline: "none",
                borderRadius: 0,
                resize: "vertical",
                minHeight: 120,
              }}
            />
          </div>

          <div style={{ marginTop: 8, textAlign: "center" }}>
            <button type="submit" style={{
              background: "#b8922a",
              color: "#fff",
              border: "none",
              padding: "14px 40px",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#a07820"}
            onMouseLeave={e => e.currentTarget.style.background = "#b8922a"}
            >Send Message</button>
          </div>
        </form>
      </div>


    </section>
  );
}
