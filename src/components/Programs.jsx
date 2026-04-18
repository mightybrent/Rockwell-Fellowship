import styles from "./components.module.css";
import Link from "next/link";

const sprintSpecs = [
  { label: "Sessions", value: "5 sessions + intake" },
  { label: "Duration", value: "6 weeks" },
  { label: "Format", value: "1:1 Virtual" },
  { label: "Inclusions", value: "Thinking Journal" },
];

export default function Programs() {
  return (
    <section className={styles.programs} id="programs">
      <div className="container">
        
        <header className={styles.programsHeader}>
          <span className="eyebrow">Two ways to engage</span>
          <h2 className={styles.programsTitle}>Tailored to your pace and complexity</h2>
        </header>

        <div className={styles.gridMain}>
          {/* Coaching Sprint */}
          <div className={styles.programSprintSide}>
            <span className={styles.programLabel}>For Rapid Change</span>
            <h3 className={styles.programHeading}>The Coaching Sprint</h3>
            <p className={styles.programDesc}>
              Concentrated enough to create real movement — spaced enough that you can actually think between sessions.
            </p>
            <p className={styles.programDesc}>
              This isn't general coaching. You bring a specific problem — a decision you're avoiding, 
              a pattern you keep repeating, a leadership moment you can't quite see clearly. 
              We dig into it, hard, until something breaks open.
            </p>

            <div className={styles.sprintCardV2}>
              <div className={styles.sprintCardV2Content}>
                <p className={styles.sprintProcess}>
                  Every sprint begins with a 30-minute intake — figuring out what you actually need to work on. 
                  Then five hour-long sessions, every other week or so, followed by a check-in 30 days out. 
                  You also get a journal to think between sessions.
                </p>
                <div className={styles.sprintSpecGrid}>
                  {sprintSpecs.map((s) => (
                    <div key={s.label} className={styles.sprintSpecItem}>
                      <span className={styles.sprintSpecLabel}>{s.label}</span>
                      <span className={styles.sprintSpecValue}>{s.value}</span>
                    </div>
                  ))}
                </div>
                <Link href="#apply" className="btn" style={{width: '100%', textAlign: 'center'}}>
                  Apply for the sprint
                </Link>
              </div>
            </div>
          </div>

          {/* Ongoing Coaching */}
          <div className={styles.programOngoingSide}>
            <span className={styles.programLabel}>Longer Engagements</span>
            <h3 className={styles.programHeading}>Thinking Partnership</h3>
            <p className={styles.programDesc}>
              For leaders navigating something that doesn't resolve in a month. 
              We meet regularly, build a shared language for what's actually happening, 
              and work over time toward something more durable than insight.
            </p>

            <div className={styles.ongoingStack}>
              <div className={styles.ongoingItem}>
                <h4 className={styles.ongoingTitle}>Leadership Retainer</h4>
                <p className={styles.ongoingText}>
                  Ongoing 1:1 coaching on a regular cadence typically twice a month. 
                  Best for leaders navigating sustained complexity: scale, role change, identity, leadership growth.
                </p>
                <p className={styles.ongoingPricing}>Inquire for pricing</p>
              </div>

              <div className={styles.ongoingItem}>
                <h4 className={styles.ongoingTitle}>Advising for Teams</h4>
                <p className={styles.ongoingText}>
                  Project-based and results-forward work for small teams or specific organizational transitions. 
                  Brought in by boards or CEOs to navigate critical human strategy.
                </p>
                <p className={styles.ongoingPricing}>Inquire for scope</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
