import styles from "./components.module.css";
import Link from "next/link";

const sprintSpecs = [
  { label: "Sessions", value: "5 sessions + intake" },
  { label: "Duration", value: "4 weeks" },
  { label: "Investment", value: "$2,500" },
  { label: "Spots", value: "10 per quarter" },
];

const ongoing = [
  {
    title: "Leadership retainer",
    desc: "Ongoing 1:1 coaching on a regular cadence — typically twice a month. Best for executives navigating sustained complexity: scale, role change, identity, leadership growth. Inquire for pricing.",
  },
  {
    title: "Leadership advising for teams",
    desc: "Brought in by a board, a CEO, or a VP of People to work directly with a leader or small team. Results-forward, not soft. Inquire for scope and pricing.",
  },
];

export default function Programs() {
  return (
    <section className={styles.programs} id="programs">
      <div className="container">

        {/* Coaching Sprint */}
        <div className={styles.programBlock}>
          <div className={styles.programIntro}>
            <span className="eyebrow">Signature Offer</span>
            <h2 className={styles.programTitle}>The Coaching Sprint</h2>
            <p className={styles.programDesc}>
              Five sessions over four weeks. One focused challenge. Concentrated
              enough to create real movement — spaced enough that you can
              actually think between sessions.
            </p>
            <p className={styles.programDesc}>
              This isn't general coaching. You bring a specific problem — a
              decision you're avoiding, a pattern you keep repeating, a
              leadership moment you can't quite see clearly. We dig into it,
              hard, until something breaks open.
            </p>
          </div>

          <div className={styles.sprintCard}>
            <div className={styles.sprintCardHeader}>
              <h3 className={styles.sprintCardTitle}>Coaching Sprint — Q2 2026</h3>
              <p className={styles.sprintCardMeta}>10 spots · quarterly · next cohort opens May</p>
            </div>
            <div className={styles.sprintCardBody}>
              <p className={styles.sprintDetail}>
                Every sprint begins with a 30-minute intake — just the two of
                us, no agenda, figuring out what you actually need to work on.
                Then five hour-long sessions, every other week or so, followed
                by a check-in 30 days out to see what held. You also get a
                journal to think between sessions, because the work happens
                there too.
              </p>
              <div className={styles.sprintGrid}>
                {sprintSpecs.map((s) => (
                  <div key={s.label} className={styles.sprintSpec}>
                    <span className={styles.sprintSpecLabel}>{s.label}</span>
                    <span className={styles.sprintSpecValue}>{s.value}</span>
                  </div>
                ))}
              </div>
              <Link href="#apply" className={styles.sprintCta}>
                Apply for the next sprint →
              </Link>
            </div>
          </div>
        </div>

        {/* Ongoing Coaching */}
        <div className={styles.programBlock}>
          <div className={styles.programIntro}>
            <span className="eyebrow">Ongoing Coaching</span>
            <h2 className={styles.programTitle}>
              Longer engagements for leaders who want a steady thinking partner.
            </h2>
            <p className={styles.programDesc}>
              For leaders navigating something that doesn't resolve in a month.
              We meet regularly, build a shared language for what's actually
              happening, and work over time toward something more durable than
              insight.
            </p>
          </div>

          <div className={styles.ongoingList}>
            {ongoing.map((item) => (
              <div key={item.title} className={styles.ongoingCard}>
                <h4 className={styles.ongoingCardTitle}>{item.title}</h4>
                <p className={styles.ongoingCardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
