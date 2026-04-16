import styles from "./components.module.css";

const profiles = [
  {
    bold: "The founder who built something real,",
    rest: " but now leads 40 people the way they led 4 — and can feel the drag.",
  },
  {
    bold: "The VP who keeps getting promoted",
    rest: " into roles that require something their track record can't fully prepare them for.",
  },
  {
    bold: "The person at an inflection point",
    rest: " — a transition, a decision, a moment they can't quite name — who needs space to think, not someone to cheer them on.",
  },
  {
    bold: "The leader who's been losing themselves",
    rest: " to the role — and is ready to reclaim some perspective before that gap gets wider.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.aboutInner}`}>
        <div className={styles.aboutHeader}>
          <span className="eyebrow">Who This Is For</span>
          <h2 className={styles.aboutTitle}>
            You're good at your job. You've been good at it for a while.
            Something shifted.
          </h2>
          <p className={styles.aboutIntro}>
            This isn't for people who need to be taught how to lead. It's for
            people who already know how — and have reached the point where more
            information isn't what's missing.
          </p>
        </div>

        <div className={styles.aboutList}>
          {profiles.map((item, i) => (
            <div key={i} className={styles.aboutCard}>
              <span className={styles.bullet} />
              <p className={styles.aboutCardText}>
                <strong>{item.bold}</strong>
                {item.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
